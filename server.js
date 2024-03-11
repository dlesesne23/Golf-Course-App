require('dotenv').config()
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config({ path: '.config/config.env'})

const db = require('./models')

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/v1/courses', require('./routes/courses'))

const PORT = process.env.PORT || 4444



app.listen(PORT, () => {
    console.log('Golf course locator on port', PORT)
})