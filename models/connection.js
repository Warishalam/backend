const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDB = async () => {
    try {
        let url = process.env.MONGODB_URL;
        await mongoose.connect(url, {useNewUrlParser:true});
        console.log('MongoDB Database Connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectMongoDB};