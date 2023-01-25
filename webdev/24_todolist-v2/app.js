//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Nenhuma informçao inserida"] }
});

const Item = mongoose.model("Item", itemSchema);


const item0 = new Item({
  name: "tarefa0"
})
const item1 = new Item({
  name: "tarefa1"
})
const item2 = new Item({
  name: "tarefa2"
})


const defaultItems = [item0, item1, item2]







var items = []
 
// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

app.get("/", function(req, res) {

// const day = date.getDate();
  
  
Item.find({}, function (err, results) {
  

  if (err) {

    console.log(err)
    
  } else {

    if (results.length === 0) {

      Item.insertMany(defaultItems, function (err) {
  if (err) {
      console.log (err)
      
  } else {
    console.log("sucessfully saved default items to DB")
    res.redirect("/")
      
    }
})
      
    }

    results.forEach(result => {
      
      items.push(result.name)
      
    });
    
  }
})



  
  
  

  res.render("list", {listTitle: "Today", newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
