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

app.get("/", function (req, res) {
  
  Item.find({}, function (err, results) {
    if (err) {
      console.log(err)
    } else {
      if (results.length === 0) {
        Item.insertMany(defaultItems, function (err) {
          if (err) {
            console.log(err)
          } else {
            console.log("sucessfully saved default items to DB")
            
            res.redirect("/")      
          }
        })
      }
      res.render("list", { listTitle: "Today", newListItems: results });
    }
  })
});

app.post("/", function (req, res) {

  

  const itemName = req.body.newItem;

  itemnovo = new Item({
    name: itemName
  })

  console.log(itemName)




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
