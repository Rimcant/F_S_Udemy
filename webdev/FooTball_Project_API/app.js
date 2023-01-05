const express = require("express");
const https = require('https'); 

const app = express();

app.get("/", function (req, res) {
    

    var options = {
        'method': 'GET',
        'hostname': 'v3.football.api-sports.io',
        'path': 'https://v3.football.api-sports.io/players/topassists?league=94&season=2021',
        'headers': {
          'x-rapidapi-key': 'ead8bc8dba612b9ea9950fb1ece5d716',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        },
        'maxRedirects': 20
      };
      
      var requ = https.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            //var data = JSON.parse(body)
            //console.log(data);
            console.log(body.toString());
        });
      
        res.on("error", function (error) {
          console.error(error);
        });
      });
      
      requ.end();

    


    

    res.send("server up and running")


})




















app.listen(3000, function () {
    console.log("server is runing on port 3000")
    
})