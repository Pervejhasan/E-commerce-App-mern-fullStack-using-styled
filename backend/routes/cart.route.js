const express = require("express");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken.route");
const CartModel = require("../models/Cart.model");
const router = express.Router();

// create product
router.post("/", verifyToken, async (req, res) => {
  const newCart = new CartModel(req.body);
  // console.log(newCart)
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});


// update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});


//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET user cart
//id will be user id
router.get("/find/:id", verifyTokenAndAuthorization ,async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId:req.params.id});
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all
router.get('/',verifyTokenAndAdmin, async (req,res)=>{
try {
    const carts=await CartModel.find();
    res.status(200).json(carts)
} catch (error) {
    res.status(200).json(error)
}
})

module.exports = router;
