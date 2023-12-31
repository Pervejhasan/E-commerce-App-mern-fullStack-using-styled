const express=require("express");
const User = require("../models/User.model");
const router=express.Router();
const CryptoJS = require("crypto-js");
const jwt=require('jsonwebtoken');
// environment variable

//REGISTER
router.post('/register',async(req,res)=>{
   if(req.body.username && req.body.email && req.body.password){
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
            });
        try {
          const savedUser=await newUser.save();  
        res.status(201).json(savedUser)
        
        } catch (error) {
            res.status(500).json(error.message)
        }
   }
   else{
    res.status(400).json({"message":"Please give your username, email and password"})
   }
});

// Login
router.post('/login',async(req,res)=>{
try {
    const user=await User.findOne({username:req.body.username})
    !user&&res.status(401).json("wrong credential");
    
    const hashPassword=CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
    const originalPassword=hashPassword.toString(CryptoJS.enc.Utf8);
    originalPassword !==req.body.password &&res.status(401).json("wrong credential");
    
    const accessToken=jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
    }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    const {password,...others}=user._doc;
    res.status(200).json({...others,accessToken});

} catch (error) {
    res.status(500).json(error.message)
}
})
module.exports=router;