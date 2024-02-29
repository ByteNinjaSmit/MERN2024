const mongoose = require('mongoose');
require('dotenv').config();

// const URI ="mongodb+srv://admin:admin1234@cluster0.wvrn3hd.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
// console.log(process.env.MONGODB_URI);
// console.log(process.env.JWT_SECRET_KEY);
const URI = process.env.MONGODB_URI; // connection string to MongoDB server

const connectDb = async () => {
    try {
        if (!URI) {
            console.error("MongoDB URI is not provided in environment variables.");
            process.exit(1);
        }
        await mongoose.connect(URI);
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("An error occurred while trying to connect to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;

