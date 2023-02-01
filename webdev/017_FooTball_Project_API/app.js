const express = require("express");
const { write } = require("fs");
const https = require('https'); 
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
});
   


app.post("/", function (req, res) {

  var i = req.body.index
  

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
  
  var requ = https.request(options, function (resp) {
    var chunks = [];
  
    resp.on("data", function (chunk) {
        chunks.push(chunk);
    });
  
    resp.on("end", function (chunk) {
      var body = Buffer.concat(chunks);         
      console.log(body.toString());
      var wdata = JSON.parse(body.toString())
      //res.write("Nome: " + response[0].player.name + "Idade: " + response[0].player.age + "Altura: " response[0].player.height + "Peso: " + response[0].player.weight + "foto: " +response[0].player.photo + "clube: " + response[0].statistics[0].team.name + "Logo: " +response[0].statistics[0].team.logo + "rating: " +response[0].statistics[0].games.rating+ "Golos: " +response[0].statistics[0].goals.total+ "assists: "+ response[0].statistics[0].goals.assists )



      

      res.send(
        "Nome: " + wdata.response[i].player.name +
        " Idade: " + wdata.response[i].player.age +
        " Altura: " + wdata.response[i].player.height +
        " Peso: " + wdata.response[i].player.weight +


        "foto:<img src=" + wdata.response[i].player.photo + " width=100 height=100> <img src=" + wdata.response[i].statistics[0].team.logo + " width=100 height=100> Rating: " + Number(wdata.response[i].statistics[0].games.rating).toFixed(1) +
        " <strong>Golos:</strong> " + wdata.response[i].statistics[0].goals.total +
        " <strong>assists</strong>: " + wdata.response[i].statistics[0].goals.assists)

      
      //res.send(wdata.response[0].player.name)
      //res.send(JSON.parse(body.toString()))
    });
  
    resp.on("error", function (error) {
      console.error(error);
    });
    





})
    

  
     
      
      
      requ.end();

    


    

    


})




















app.listen(3000, function () {
    console.log("server is runing on port 3000")
    
})