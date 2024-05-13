const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()
 
app.use('/app', userRoutes)
   
const Port = 8000
app.listen(Port, console.log("Server up and running"))