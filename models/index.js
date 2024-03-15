const express = require('express')

require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection


db.on('connected', function () {
    console.log(`Connected to ${db.name} at ${db.host} on port ${db.port}`)
})


module.exports = {
    Course: require('./Course'),
    user: require('./user'),
}