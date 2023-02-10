console.log("akshay: yo1111111111111111111111111111111111111111111111111");


import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import Order from "./models/order.js";
import User from "./models/user.js";

console.log("akshay: yo22222222222222222222222222222222222222222222222222");

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
dotenv.config();

//greet
app.get(['/','/api'], async (_, res) => {
    try {
        res.send("Greetings from the backend!!!")
    }
    catch (err) {
        res.status(500).json({message: "Something went wrong."})
    }
});

//greet
app.get(['/','/api/login'], async (req, res) => {
    try {
        const id = req.body.userId
        const pass = req.body.password

        const user = await User.findOne({ userId: id })
        if (user.password !== pass) {
            res.status(401).json({message: "User is not authorized to access the application (Please check your username and password)"})
        }
        res.status(200)
    }
    catch (err) {
        res.status(500).json({message: "Something went wrong."})
    }
});

//get all orders
app.get('/api/order', async (_, res) => {
    try {
        const orders = await Order.find({}, {'createdAt': 1, 'comments': 1, 'creator': 1, 'status': 1, "images":{$slice:1}})
        res.status(200).json(orders)
    }
    catch (err) {
        res.status(404).json({message: err.message})
    }
});

//create new order
app.post('/api/order', async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    }
    catch (err) {
        res.status(409).json({message: err.message});
    }
});

//patch (update) order status
app.patch('/api/order', async (req, res) => {
    try {
        const savedOrder = await Order.findByIdAndUpdate(req.body._id, req.body, {new: true})
        res.status(201).json(savedOrder)
    }
    catch (err) {
        res.status(409).json({message: err.message});
    }
});

//connect to mongo db and run server if connection successful
mongoose.connect(process.env.MONGODB_CONNECTION_URL)
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    }).catch(err => {
        console.log("akshay: mongodb connection error!!!!!!!!!!!!!!", err.message);
    })


    