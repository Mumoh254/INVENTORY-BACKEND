
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');


const  app  =  express();

//conn  to  mongo  db

const  PORT  =  process.env.PORT ||  8000



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