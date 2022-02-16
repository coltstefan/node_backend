
const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema(
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
        firstName:{
            type: String,
        },
        lastName:{
            type: String
        },
        rating:{
            type: Number,
        },
        fitnessProgrammes:[
            {
                programmeId:{
                    type: String
                }
            }
        ]

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Trainer" , TrainerSchema);