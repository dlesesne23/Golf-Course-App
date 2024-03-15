const express = require('express')
const router = express.Router()
const isAuthenticated = require('../controllers/isAuthenticated')

const db = require('../models')

router.use(isAuthenticated)

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

// CREATE New Course
router.post('/', async (req, res) => {
  console.log(req.body)
  const newCourse = (req.body)
  // courses.push(newCourse)
  req.body.user = req.session.currentUser.id
  console.log(req.session)
  await db.Course.create(req.body).then((courses) =>
  res.redirect("/courses/" + courses._id)
);
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