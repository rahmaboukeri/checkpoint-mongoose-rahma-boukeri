//import express        ******************1
const express = require("express")

//instance express    ********************2
const app = express()

//import .env            ********************5
require('dotenv').config()

//connect mongodb            ********************6
const connectDB = require("./config/connectDB")
connectDB()

//import middlware
app.use(express.json())

//import routes  contact        ******************7
const routescontact = require("./routes/contact")
app.use('/api/contacts',routescontact)


//creation port             ********************3
const port = process.env.PORT 

    //create server   ********************4
app.listen(port, err => {                  
    err ? console.error(err)
    :
    console.log(`server is running on port ${port} ...`)
}
    )