require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}`)
})

module.exports = {
    Golf: require('./golf'),
    User: require('./user'),
    seedGolf: require('.seed')
}