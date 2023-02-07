const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware function in Express that serves static files
app.use(express.static("public"));

// EJS template engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wikiDB', {
  useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected to wikiDB'))
    .catch(err => console.log(err));

// create a new schema
const articleSchema = {
    title: String,
    content: String
};
//create new model
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
    
    .get(function (req, res) {
        Article.find(function (err, foundArticles) {
            if (!err) {
                //console.log(foundArticles) 
                res.send(foundArticles)
            } else {
                console.log(err)
            }
        })
    })

    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })
        newArticle.save(function (err) {
            if (!err) {
                res.send("sucessfuly added a new article.")

            } else {
                res.send(err);
            }
        })
    })
    
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("sucessfully deleted all articles");
            } else {
                res.send(err);
            }
        });
    });


    // ------------------artigo especifico.--------------

    app.route("/articles/:articleTitle")
  .get(function(req, res) {
    Article.findOne({ title: req.params.articleTitle }, function(err, foundArticle) {
        if (foundArticle) {
            res.send(foundArticle);
      } else {
        res.send("no articles found");
      }
    });
  })
  .put(function(req, res) {
      Article.updateMany(
          { title: req.params.articleTitle },//conditions
          { title: req.body.Title, content: req.body.content }, //updates
          {overwirte: true},
          function (err) {
              if (!err) {
                  res.send("Article updated successfully");
              } else {
                  res.send("artigo nao atualizado")
        
      }
    });
  })
        .patch(function (req, res) {
            Article.updateMany(
                { title: req.params.articleTitle },
                { $set: req.body },
                function (err) {
                    if (!err) {
                        res.send("scessfully update article")
                    } else {
                        res.send(err)
                    }
                }
            )
        })
        
        
        
  .delete(function(req, res) {
      Article.deleteOne({ title: req.params.articleTitle },
          function (err) {
              if (!err) {
                  res.send("Article deleted successfully");
              } else {
                  console.log(err)
      }
    });
  });




    //-------------------------------------------

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
