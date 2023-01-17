const express = require("express")
const bodyParser = require("body-parser")

const app = express()
let tarefas = ["Fazer coisas", "outras coisas"]
let workList = []

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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
       console.log(req.body.list)
       var tarefa = req.body.text
       if (req.body.list === "Work List") {
         workList.push(tarefa)
         res.redirect("/work");        
       } else {
        tarefas.push(tarefa)
        res.redirect("/");        
       }  
})
})

app.get("/work", function(req,res){
    res.render("list", { kindOfDay: "Work List", novoitem: workList });
})


app.get("/footer", function(req,res){
    res.render("footer")
})

app.listen(3000, function () {
    console.log("server started on port 3000");
})