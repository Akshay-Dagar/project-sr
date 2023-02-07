import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    role: String,
    name: String,
    userId: String,
    password: String
})

const User = mongoose.model('User', userSchema)
export default User