//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const date = require(__dirname + "/date.js");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-ricardo:yhajvtCRmUXo1g5f@cluster0.8wyzybw.mongodb.net/todolistDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });


const itemSchema = new mongoose.Schema({
  name: { type: "String" }
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

const listSchema = {
  name: "string",
  items: [itemSchema]
}
const List = mongoose.model("List", listSchema);

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

app.get("/:costumListName", function (req, res) {
  const costumListName = _.capitalize( req.params.costumListName);
  
  List.findOne({ name: costumListName }, function(err, foundList) {
    if (err) return handleError(err);
    if (foundList) {
      //show Existing list
      res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
    } else {
      //create a new list
      const list = new List({
        name: costumListName,
        items: defaultItems
      });
      list.save();
      res.redirect("/" + costumListName);
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  itemnovo = new Item({
    name: itemName
  })

  if (listName === "Today") {
    itemnovo.save()
    res.redirect("/")    
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(itemnovo)
      foundList.save()
      res.redirect("/"+listName)      
    })
        
  }

});

app.post("/delete", function (req, res) {
  const checkedItem = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findOneAndDelete({ _id: checkedItem }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("item removed form the database.");
        res.redirect("/")
      }
    });    
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItem } } }, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
      
    })
    
  }



  
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.listen(port, function() {
  console.log("Server has started");
});
