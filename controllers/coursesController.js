const Course = require('../models/Course')



exports.getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find()

        return res.status(200).json({
            success: true,
            count: courses.length,
            data: courses
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error'})
    }
}


// Create
exports.addCourses = async (req, res, next) => {
    try {
        const course = await Course.create(req.body)

        return res.status(200).json({
            success: true,
            data: course
        })
    } catch (error) {
        console.error(error)
        if(error.code === 11000){
            return res.status(400).json({ error: 'Course already exists'})
        }
        res.status(500).json({ error: 'Server Error'})
    }
}