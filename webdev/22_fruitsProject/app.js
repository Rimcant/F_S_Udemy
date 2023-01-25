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
    name: "Apple",
    rating: 7,
    review: "pretty solid as a fruit."
});



// fruit.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: fruit
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
    
});



Fruit.findOne({name: "kiwi"}, function(err, fruit) {
    if(err) {
        console.log("Error finding Fruit. " + err );
    }
    else {
        Person.updateOne({name: "John"}, {favouriteFruit: fruit }, function(err) {
            if (err) {
                console.log(err);
            } else {
                mongoose.connection.close();
                console.log("Successfully updated document.");
            }
        });
    }
});


// Person.updateOne({ _id: "63ce681438e1b648b2e64ea4" }, { $set: { name: "felizberto" } }, function (err, result) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated person:", result);
//     }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//     if (err) {
//     console.log(err);
//     } else {
//     console.log("Successfully deleted all documents with the name John.");
//     }
//     });