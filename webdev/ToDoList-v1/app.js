const express = require("express")
const bodyParser = require("body-parser")

const app = express()
var tarefas = []

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    var today = new Date();
    // const weekday = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    // currentday = today.getDay();
    // var day = weekday[currentday];

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
   

    var dayi = today.toLocaleDateString("pt-pt", options)

    
    res.render("list", { kindOfDay: dayi, novoitem: tarefas });

    app.post("/", function (req, res) {
       
        var tarefa = req.body.text
        tarefas.push(tarefa)

        //     var ul = document.getElementById("tarefas");
        //     var li = document.createElement("li");
        //     li.appendChild(document.createTextNode("tarefa"));
        // ul.appendChild(li);

        res.redirect("/");
          
        
        
})
    




    // if ( currentday === 6 || currentday === 0) {
    //     day = "yay its the weekEnd!!"
    // }
    // else {
    //     // res.write("<p>asdas</p>asda")
    //     // res.write("<p>asdasd</p>sad")
    //     // res.write("<h1>booo! I have to work :(</h1> ")
    //     // res.send()
    //     day = "BOOOOOO! Its WeekDAYY ... I have to work"
        
    // }
  
        
   
})









app.listen(3000, function () {
    console.log("server started on port 3000");
})