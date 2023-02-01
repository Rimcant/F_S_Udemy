const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + "/bmiCalculator.html")
    //res.sendFile(path [, options] [, fn])
})

//para obter dados dos forms

app.post("/", function (req, res) {
    console.log(req.body); 
    var weight1 = Number(req.body.weight);
    var height1 = Number(req.body.height);
    var result = weight1 + height1;
    function calculateBMI(weight, height) {
        const bmi = weight / (height * height);
      
        if (bmi < 18.5) {
          return "estás abaixo do peso indicado ->Underweight = <18.5 <-";
        } else if (bmi >= 18.5 && bmi < 25) {
          return "estás dentro da normalidade ->Normal weight = 18.5–24.9 <-";
        } else if (bmi >= 25 && bmi < 30) {
          return "estás acima do peso indicado ->Overweight = 25–29.9 <-";
        } else {
          return "estás muito acima do normal, cuidado consulta um médioc ->Obesity = BMI of 30 or greater<-";
        }
      }
      
    res.send("O Índice de Massa Corporal (IMC) é uma medida que pode ser usada para avaliar se uma pessoa está no peso ideal, abaixo ou acima do peso. Ele é calculado dividindo o peso em quilogramas pela altura em metros ao quadrado. <br> o seu Peso é: " + weight1 + "Kg. A altura é: " + height1 + "m. O Teu BMI é: " + (weight1 / (height1 * height1)).toFixed(1)+ " ou seja, " + calculateBMI(weight1,height1))
})







app.listen(3000)
console.log("server up and running on port 3000")