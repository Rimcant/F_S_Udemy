const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const https = require("https");
const { lstat } = require("fs");
app.use(bodyParser.urlencoded({ extendend: true }));

app.use(express.static("Public")) // para isto é preciso o express, ficheiro estático


app.get("/", function (req, res) { //app running using the server (qnd fazes o requeest do ao nosso server ele tem de dar esta resposta)
    res.sendFile(__dirname + "/signup.html"); //a nossa resposta é enviar este ficheiro
})

//para obter dados dos forms

app.post("/", function (req, res) {// post route, input do user (para isto é preciso o bodyparser url encoded)
    const firstName = req.body.fName
    const lastName = req.body.sName
    const email = req.body.email
    /*
###################__DATA OBJECT____############################*/
        
    const data = { //data object 
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
//#################################################################
    var jsonData = JSON.stringify(data) //tornar data em flatpack json

    const url = "https://us10.api.mailchimp.com/3.0/lists/b8d59a430f"

    const options = {
        method: "POST",
        auth: "angela1:5fac3d18836e00f33d85daafc471a984-us10"
    } 

    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html")
            
        }
            
            
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    
    request.write(jsonData)
    request.end();
}); 


app.post("/failure", function (req, res) {
    res.redirect("/")
})







app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on port 3000")
});



//key : 5fac3d18836e00f33d85daafc471a984-us10
//      5fac3d18836e00f33d85daafc471a984-us10

//list id: b8d59a430f
