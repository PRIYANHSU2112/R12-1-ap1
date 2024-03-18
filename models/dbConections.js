const mongoose=require('mongoose');

exports.dbconnections= async ()=>{
    try{
       await mongoose.connect("mongodb://localhost:27017/mydata")
        console.log("conect data")
    }catch(error){
     console.log(error.message);
    }
    
}