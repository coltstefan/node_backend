
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            require: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        isTrainer:{
            type: Boolean,
            default: false

        },
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
        },
        height:{
            type: Number,
        },
        weight:{
            type: Number
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User" , UserSchema);