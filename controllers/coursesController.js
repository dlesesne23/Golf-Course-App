const express = require('express')
const router = express.Router()
const isAuthenticated = require('../controllers/isAuthenticated')

const db = require('../models')

router.use(isAuthenticated)

// Index
router.get('/', (req, res) => {
    console.log(req.session)
    db.Course.find({ user: req.session.currentUser._id }).then((course) => {
      res.render("course-home", { 
          course: course,
          currentUser: req.session.currentUser
       });
    });
})

// NEW
router.get("/new", (req, res) => {
  res.render("new-course", { currentUser: req.session.currentUser });
});

// CREATE New Course
router.post('/', async (req, res) => {
  console.log(req.body)
  const newCourse = (req.body)
  // courses.push(newCourse)
  req.body.user = req.session.currentUser.id
  console.log(req.session)
  await db.Course.create(req.body).then((course) =>
  res.redirect("/courses/" + course._id)
);
})

// Show
router.get("/:id", function (req, res) {
    db.Course.findById(req.params.id)
      .then((course) => {
        res.render("course-details", {
          course: course,
          currentUser: req.session.currentUser 
        });
      })
      .catch(() => res.render("404"));
  })

  // EDIT
  router.get("/:id/edit", (req, res) => {
    db.Fruit.findById(req.params.id).then((course) => {
      res.render("edit-course", {
        course: course,
        currentUser: req.session.currentUser 
      });
    });
  });

  // UPDATE
  router.put("/:id", async (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    await db.Course.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (course) => res.redirect("/courses/" + course._id)
    );
  });

  // DELETE
  router.delete("/:id", async (req, res) => {
    await db.Course.findByIdAndDelete(req.params.id).then(() =>
      res.redirect("/courses")
    );
  });



module.exports = router