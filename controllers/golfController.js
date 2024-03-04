const express = require('express')
const router = express.Router()

const golf = require('../models/golf')

//INDEX
router.get('/golf', (req, res) => {
    res.render('golf-index.ejs', { golf })
})