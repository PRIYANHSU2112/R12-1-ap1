const express = require("express");
const app=express();
const dotenv=require('dotenv')
// dotenv env se data to accces karne ke liye
dotenv.config({path:"./.env"})
const PORT= process.env.PORT

// db connections
// const conn=require('./models/dbConections');
// conn.dbconnections();
// require('./models/dcConections').dbconnections(); // one line code;
//Routes
const userRouter=require('./routes/userRouter') 
// logger npm morgen iska use router mess dene ke liye kiya jata hai ki 
const logger=require('morgan')
app.use(logger('tiny'));
// body pasres
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/user',userRouter);
// app. all rout creat to handle and understand worng rout 
app.all('*',(req,res)=>{
    res.status(404).json({success:false,message:`${req.url} rout not found`})
})

// server
app.listen(PORT,()=>{
    console.log(`this is server${PORT}`)
})