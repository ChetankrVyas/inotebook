const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://chetankrvyas:Chetan%402004@cluster0.4fri6ed.mongodb.net/notebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;