require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const methodOverride = require('method-override')


const PORT = process.env.PORT || 4444

const db = require('./models')

const coursesController = require('./controllers/coursesController')
const userController = require('./controllers/userController')
const sessionController = require('./controllers/sessionController.js')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET_KEY, 
    resave: false,
    saveUninitialized: false
}))

app.use('/courses', coursesController)
app.use('/users', userController)
app.use('/sessions', sessionController)

app.get('/', function (req, res) {
    res.redirect('/courses')
})

app.get('*', function (req, res) {
    res.render('404')
});

app.listen(PORT, () => {
    console.log('Golf course locator on port', PORT)
})