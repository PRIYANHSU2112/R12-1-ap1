const express = require('express');

const router=express.Router();
const {home , createUser}=require("../controller/userControllers")

router.get('/',home)
router.post('/create',createUser)

module.exports=router;
