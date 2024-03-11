const express = require('express')
const { getCourses, addCourses } = require('../controllers/coursesController')
const router = express.Router()

router
    .route('/')
    .get(getCourses)
    .post(addCourses)

module.exports = router