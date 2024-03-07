require('dotenv').config()
const path = require('path')
const express = require('express')
const livereload = require('livereload')
const connectLiveReload = require('connect-livereload')
const methodOverride = require('method-override')
const session = require('express-session')

const PORT = process.env.PORT || 3000

const db = require('./models');

const golfCtrl = require('./controllers/golfController')

const app = express()



app.use(
    session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false
    }) 
  )

  const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

//Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(connectLiveReload())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', function (req, res) {
    res.redirect('/fruits')
  })

  app.get('/seed', function (req, res) {
    // Remove any existing fruits
    db.Golf.deleteMany({})
        .then(removedCourses => {
            console.log(`Removed ${removedCourses.length} fruits`)

            // Seed the fruits collection with the seed data
            db.Fruit.insertMany(db.seedFruits)
                .then(addedCourses => {
                    console.log(`Added ${addedCourses.length} fruits to be eaten`)
                    res.json(addedCourses)
                })
        })
})
  

app.use('/golf', golfCtrl)

app.get('*', function (req, res) {
    res.render('404')
})

app.listen(PORT, () => {
    console.log('Golf course locator on port', PORT)
})