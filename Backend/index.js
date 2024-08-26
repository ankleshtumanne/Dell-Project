require('dotenv').config()
const bcrypt = require('bcrypt');
const express=require("express")
const connectToDB = require('./config/db')
const router = require('./routes/userRoutes')
var jwt = require('jsonwebtoken');
const productRouter = require('./routes/productRoutes');
const  cartRouter  = require('./routes/cartRoutes');
const app=express()

const port=process.env.PORT ||3020



app.use(express.json())
app.use("/user",router)
app.use("/product",productRouter)
app.use("/",cartRouter)
app.listen(port,async(req,res)=>{
    await connectToDB()
    console.log("server start and connected to db")
})