const mongoose = require("mongoose");

const ProgrammeSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
        },
        duration:{
            type: Number,
        },
        price:{
            type: Number,
            required: true
        },
        trainerId:{
            type: String,
            required: true
        },
        users:[
            {
                userId:{
                    type: String,
                },
                username:{
                    type: String
                }
            }
        ],
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Programme" , ProgrammeSchema);