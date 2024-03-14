const mongoose = require('mongoose')

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
    address: {
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



module.exports = mongoose.model('Course', CourseSchema)