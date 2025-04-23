
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ["admin", "buyer", "seller", 'guest',],
        default: "guest"
    },
    photo: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        default: "male"
    }
}, { timestamps: true })

userSchema.index({ email: 1 }, { unique: true })


const User = mongoose.model("User", userSchema)
export default User