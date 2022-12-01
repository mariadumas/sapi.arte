const mongoose = require("mongoose");


const password = "mf3JGrRu9hpZkqk2";
const db = "sapiarte"

const uri = `mongodb+srv://maria:${password}@clusterdemo.pcnnrnn.mongodb.net/${db}?retryWrites=true&w=majority`


module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})