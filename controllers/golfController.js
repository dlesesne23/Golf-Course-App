const express = require('express')
const router = express.Router()

const db = require('../models/golf')

//INDEX
router.get('/', (req, res) => {
    db.Golf.find({})
        .then(golf => {res.render('golf-index.ejs', { golf })})
})

//NEW

router.get('/golf/new', (req, res) => {
    res.render('golf-new.ejs')
})

//SHOW

router.get('/:id', function (req, res) {
    db.Golf.findById(req.params.id)
      .then(golf => {
            res.render('golf-show.ejs', { golf })
        })
      .catch(() => console.log('404'))
})