import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import Order from "./models/order.js";

const app = express();
app.use(cors());
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

//get all orders
app.get('/api/order', async (_, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    }
    catch (err) {
        res.status(404).json({message: err.message})
    }
});

//create new order
app.post('/api/order', async (req, res) => {
    const newOrder = Order.create(req.body)
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
        Order.updateOne({ _id: req.body.id }, { status: req.body.status }, (err, res) => {
            if (err)
                throw err
            else
                res.status(201).json(savedOrder);
        });
    }
    catch (err) {
        res.status(409).json({message: err.message});
    }
});



//connect to mongo db and run server if connection successful
mongoose.connect(process.env.MONGODB_CONNECTION_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    }).catch(err => {
        console.log(err.message);
    })


    