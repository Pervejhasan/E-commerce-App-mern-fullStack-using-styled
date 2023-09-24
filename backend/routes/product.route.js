const express = require("express");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken.route");
const ProductModel = require("../models/Product.model");
const router = express.Router();

// create product
router.post("/",verifyTokenAndAdmin, async(req,res)=>{
const newProduct=new ProductModel(req.body);
// console.log(newProduct)
try {
  const savedProduct=await newProduct.save();
  res.status(200).json(savedProduct);
} catch (error) {
    res.status(500).json(error);
}

})


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

// //GET user
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.id);
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //GET all users
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   //new name of query
//   const query = req.query.new;
//   try {
//     const users = query
//       ? await UserModel.find().sort({ _id: -1 }).limit(2)
//       : await UserModel.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //GET user statistics

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//   try {
//     const data = await UserModel.aggregate([
//       {
//         $match: { createdAt: { $gte: lastYear } },
//       },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;
