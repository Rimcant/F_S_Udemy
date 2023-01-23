const mongoose = require('mongoose');

mongoose.set('strictQuery', false); 


mongoose.connect("mongodb://localhost:27017/fruitsDB",  {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required.']},
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);


const fruit = new Fruit({
    // name: "Apple",
    rating: 7,
    review: "pretty solid as a fruit."
});



fruit.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});


// person.save();


// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 10,
//     review: "the best fruit"
// })

// const banana = new Fruit({
//     name: "banana",
//     rating: 8,
//     review: "great fruit"
// });

// const strawberry = new Fruit({
//     name: "strawberry",
//     rating: 9,
//     review: "delicious fruit"
// });

// const watermelon = new Fruit({
//     name: "watermelon",
//     rating: 7,
//     review: "refreshing fruit"
// });

// const grape = new Fruit({
//     name: "grape",
//     rating: 9,
//     review: "tasty fruit"
// });

// // Fruit.insertMany([kiwi,banana,strawberry,watermelon, grape], function(err, fruits) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log("Successfully saved", fruits.length, "fruits to the database.");
// //     }
// // });



Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name)
        
        });
    }
    mongoose.connection.close();
});

