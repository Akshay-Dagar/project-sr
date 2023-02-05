import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments: String,
    creator: String,
    images: [String],
    status: {
        type: String,
        default: "Pending"
    }
})

const Order = mongoose.model('Order', orderSchema)
export default Order