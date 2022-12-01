const mongoose = require("mongoose");

const {Schema} = mongoose

const PaintingSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        required: false
    },
    size: {
        type: String,
        required: true
    },
    technique: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    serie: [{
        _id: {
            type: Schema.ObjectId,
            ref: "series"
        },
        name: String

    }]


}) 


const PaintingsModel = mongoose.model("paintings", PaintingSchema);

module.exports = PaintingsModel