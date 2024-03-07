const mongoose = require('mongoose');
const golfSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type:String},
    readyToEat: {type: Boolean}
})


module.exports = mongoose.model("Courses", golfSchema)