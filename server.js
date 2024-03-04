const golfController = require('./controllers/golfController')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json())

app.use(golfController)

app.listen(PORT, () => {
    console.log('Golf course locator on port', PORT)
})