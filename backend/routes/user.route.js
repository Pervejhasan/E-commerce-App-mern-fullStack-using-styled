const express = require("express");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.route");
const UserModel = require("../models/User.model");
const router = express.Router();

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
router.delete('/:id',verifyTokenAndAuthorization, async (req,res)=>{
try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json('user has been deleted...')
} catch (error) {
    res.status(500).json(error)
}

})

//GET user
router.get('/find/:id',verifyTokenAndAdmin, async (req,res)=>{
    try {
      const user= await UserModel.findById(req.params.id);
      const {password,...others}=user._doc;
      res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
    
    })
    
//GET all users

router.get('/',verifyTokenAndAdmin, async (req,res)=>{

    

    try {
      const users= await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
    
    })





module.exports = router;
