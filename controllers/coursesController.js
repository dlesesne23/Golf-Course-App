const express = require('express')
const router = express.Router()

const db = require('../models')



// Index
router.get('/', (req, res) => {
    console.log(req.session)
    db.Course.find({ user: req.session.currentUser._id }).then((courses) => {
        res.render('course-home', {
            courses: courses,
            currentUser: req.session.currentUser
        })
    })
})



module.exports = router