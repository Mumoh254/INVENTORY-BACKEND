
const express = require('express')

const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')


const  app  =  express()

app.use( express.json());
app.use( express.urlencoded({extended: false}))
app.use(bodyparser.json())
//conn  to  mongo  db


const userRoute = require('./routes/userRoute');


const  PORT  =  process.env.PORT ||  8000

//route  middle  ware

app.use("/api/users" , userRoute)


//routes
app.get("/" , (req  , res) =>{


    res.send({
        message: " Home  Page "
    })
})
//connect   to  db   &   start  Server

mongoose.connect(process.env.MONGODB_URL)
   .then(()=>{
    app.listen( PORT , (  )=>{
        console.log( ` server   running    on  port  ${PORT}`)
    })
   })
   .catch( (err)=>{
    console.log( err)
   })