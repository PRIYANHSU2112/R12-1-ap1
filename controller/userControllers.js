
const User=require('../models/userModel')

exports.home=(req,res,next)=>{
    try{
        res.status(200).json({success:true,message:"jki"})

    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
};

exports.createUser=async function(req,res,next){    
    try{
        const newuser=new User(req.body);
        await newuser.save();
        res.status(201).json({success:true,message:newuser})
    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
      
   
};