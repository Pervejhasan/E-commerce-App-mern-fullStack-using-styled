const express = require("express");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken.route");
const ProductModel = require("../models/Product.model");
const router = express.Router();

// create product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body);
  // console.log(newProduct)
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("product has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET all products
router.get("/", async (req, res) => {
  //new name of query
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products;
    if (queryNew) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await ProductModel.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await ProductModel.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;
