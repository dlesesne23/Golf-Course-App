const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/coursesController')
const userController = require('../controllers/userController')

router.get('/', coursesController.getCourses)

module.exports = router