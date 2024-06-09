const mongoose = require('mongoose');
const config=require('../config');
const connectToMongo = () => {
    mongoose.connect(config.MONGO_URI);

    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;