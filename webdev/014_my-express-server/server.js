const express = require("express");

const app = express()

app.get("/", function (req, res) {
    res.send("<h1>hello world </h1>");   
})

app.get("/contact", function (req, res) {
res.send("contact me at: belele@belele.com")    

})


app.get("/about", function (req, res) {
    res.send("ce é voce e eu sou um belele ")
    
     
    
    })
app.listen(3000, function () {
    console.log("server started on port 3000")
});
