const mongoose=require('mongoose');

const userModel=new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"user name is requried"],
        minLength:[3,"User name must be at least 3 characters"]
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:[true,"Email is requried"],
        minLength:[3,"User name must be at least 3 characters"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true,"Password is requried"],
        minLength:[3,"Password be at least 3 characters"],
        maxLength:[15,"Password must be at most 15 characters"]
    },
    
    
},{timestamps:true})    

const user=mongoose.model("user",userModel);

module.exports=user