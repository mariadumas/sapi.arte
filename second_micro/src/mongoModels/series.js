const mongoose = require("mongoose");

const {Schema} = mongoose

const SeriesSchema = new Schema({
    name: String
}) 


const SeriesModel = mongoose.model("series", SeriesSchema);

module.exports = SeriesModel