const express = require("express");
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extendend: true }));

app.use(express.static("Public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html"); 
})

//para obter dados dos forms

app.post("/", function (req, res) {
    var firstName = req.body.fname
    var lastName = req.body.sname
    var email = req.body.email

    console.log(firstName, lastName, email)

})










app.listen(3000, function () {
    console.log("server is running on port 3000")
});



//key : 5fac3d18836e00f33d85daafc471a984-us10

//list id: b8d59a430f


// const client = require("@mailchimp/mailchimp_marketing");

// client.setConfig({
//   apiKey: "YOUR_API_KEY",
//   server: "YOUR_SERVER_PREFIX",
// });

// const run = async () => {
//   const response = await client.lists.createList({
//     name: "name",
//     permission_reminder: "permission_reminder",
//     email_type_option: true,
//     contact: {
//       com pany: "company",
//       address1: "address1",
//       city: "city",
//       country: "country",
//     },
//     campaign_defaults: {
//       from_name: "from_name",
//       from_email: "Beulah_Ryan@hotmail.com",
//       subject: "subject",
//       language: "language",
//     },
//   });
//   console.log(response);
// };

// run();
