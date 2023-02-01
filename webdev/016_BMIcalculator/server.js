type X2jOptions = {
  preserveOrder: boolean;
  attributeNamePrefix: string;
  attributesGroupName: false | string;
  textNodeName: string;
  ignoreAttributes: boolean;
  removeNSPrefix: boolean;
  allowBooleanAttributes: boolean;
  parseTagValue: boolean;
  parseAttributeValue: boolean;
  trimValues: boolean;
  cdataPropName: false | string;
  commentPropName: false | string;
    /**
Control how tag value should be parsed. Called only if tag value is not empty

@returns {undefined|null} `undefined` or `null` to set original value.
@returns {unknown} 
1. Different value or value with different data type to set new value. <br>
2. Same value to set parsed value if `parseTagValue: true`.
   */
  tagValueProcessor: (tagName: string, tagValue: string, jPath: string, hasAttributes: boolean, isLeafNode: boolean) => unknown;
  attributeValueProcessor: (attrName: string, attrValue: string, jPath: string) => string;
  numberParseOptions: strnumOptions;
  stopNodes: string[];
  unpairedTags: string[];
  alwaysCreateTextNode: boolean;
  isArray: (tagName: string, jPath: string, isLeafNode: boolean, isAttribute: boolean) => boolean;
  processEntities: boolean;
  htmlEntities: boolean;
  ignoreDeclaration: boolean;
  ignorePiTags: boolean;
  transformTagName: ((tagName: string) => string) | false;
};
type strnumOptions = {
  hex: boolean;
  leadingZeros: boolean,
  skipLike?: RegExp
}
type X2jOptionsOptional = Partial<X2jOptions>;
type validationOptions = {
  allowBooleanAttributes: boolean;
  unpairedTags: string[];
};
type validationOptionsOptional = Partial<validationOptions>;

type XmlBuilderOptions = {
  attributeNamePrefix: string;
  attributesGroupName