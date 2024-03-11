const mongoose = require('mongoose')
const geocoder = require('../utility/geocoder')

const CourseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 10
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true
    },
    courseRating: {
        type: Number,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    }
})

// Geocode and create location
CourseSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.location)
    console.log(loc)
})

module.exports = mongoose.model('Course', CourseSchema)