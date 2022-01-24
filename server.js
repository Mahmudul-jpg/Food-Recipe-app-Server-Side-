const express = require('express');
const userRoutes = require('./routes/UserRoutes')
const app = express()
const db = require('./db')
app.use(express.urlencoded({ extended: true }))
app.use(userRoutes)
app.listen(5000, () => {
    console.log('server')
})