const express = require('express')
const router = express.Router()

const db = require('../models')



// Index
router.get('/', (req, res) => {
    console.log(req.session)
    db.Course.find({ user: req.session.currentUser._id }).then((courses) => {
      res.render("golf-profile", { 
          courses: courses,
          currentUser: req.session.currentUser
       });
    });
})



// Show
router.get("/:id", function (req, res) {
    db.Course.findById(req.params.id)
      .then((courses) => {
        res.render("golf-show", {
          courses: courses,
          currentUser: req.session.currentUser 
        });
      })
      .catch(() => res.render("404"));
  });



module.exports = router