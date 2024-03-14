const dotenv = require('dotenv')
const connectDB = require('./config/db')
const path = require('path')
const express = require('express')
const methodOverride = require('method-override')

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 4444

const coursesCtrl = require('./controllers/coursesController')

connectDB()

const app = express()




//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())






app.listen(PORT, () => {
    console.log('Golf course locator on port', PORT)
})