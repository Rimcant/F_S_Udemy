"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_FLAGS = exports.DEFAULT_OPTIONS = exports.OPTIONS = exports.parseOptions = exports.resolveSRVRecord = void 0;
const dns = require("dns");
const fs = require("fs");
const mongodb_connection_string_url_1 = require("mongodb-connection-string-url");
const url_1 = require("url");
const mongo_credentials_1 = require("./cmap/auth/mongo_credentials");
const providers_1 = require("./cmap/auth/providers");
const compression_1 = require("./cmap/wire_protocol/compression");
const encrypter_1 = require("./encrypter");
const error_1 = require("./error");
const logger_1 = require("./logger");
const mongo_client_1 = require("./mongo_client");
const promise_provider_1 = require("./promise_provider");
const read_concern_1 = require("./read_concern");
const read_preference_1 = require("./read_preference");
const utils_1 = require("./utils");
const write_concern_1 = require("./write_concern");
const VALID_TXT_RECORDS = ['authSource', 'replicaSet', 'loadBalanced'];
const LB_SINGLE_HOST_ERROR = 'loadBalanced option only supported with a single host in the URI';
const LB_REPLICA_SET_ERROR = 'loadBalanced option not supported with a replicaSet option';
const LB_DIRECT_CONNECTION_ERROR = 'loadBalanced option not supported when directConnection is provided';
/**
 * Determines whether a provided address matches the provided parent domain in order
 * to avoid certain attack vectors.
 *
 * @param srvAddress - The address to check against a domain
 * @param parentDomain - The domain to check the provided address against
 * @returns Whether the provided address matches the parent domain
 */
function matchesParentDomain(srvAddress, parentDomain) {
    const regex = /^.*?\./;
    const srv = `.${srvAddress.replace(regex, '')}`;
    const parent = `.${parentDomain.replace(regex, '')}`;
    return srv.endsWith(parent);
}
/**
 * Lookup a `mongodb+srv` connection string, combine the parts and reparse it as a normal
 * connection string.
 *
 * @param uri - The connection string to parse
 * @param options - Optional user provided connection string options
 */
async function resolveSRVRecord(options) {
    var _a, _b, _c;
    if (typeof options.srvHost !== 'string') {
        throw new error_1.MongoAPIError('Option "srvHost" must not be empty');
    }
    if (options.srvHost.split('.').length < 3) {
        // TODO(NODE-3484): Replace with MongoConnectionStringError
        throw new error_1.MongoAPIError('URI must include hostname, domain name, and tld');
    }
    // Resolve the SRV record and use the result as the list of hosts to connect to.
    const lookupAddress = options.srvHost;
    const addresses = await dns.promises.resolveSrv(`_${options.srvServiceName}._tcp.${lookupAddress}`);
    if (addresses.length === 0) {
        throw new error_1.MongoAPIError('No addresses found at host');
    }
    for (const { name } of addresses) {
        if (!matchesParentDomain(name, lookupAddress)) {
            throw new error_1.MongoAPIError('Server record does not share hostname with parent URI');
        }
    }
    const hostAddresses = addresses.map(r => { var _a; return utils_1.HostAddress.fromString(`${r.name}:${(_a = r.port) !== null && _a !== void 0 ? _a : 27017}`); });
    validateLoadBalancedOptions(hostAdd