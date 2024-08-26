const express=require("express")
const  cartRouter =express.Router();
const {
  getCartData,
  incrementQty,
  postToCart,
  decrementQty,
  deleteProduct,
} =require("../controller/cartController.js");
const Auth = require("../middleware/Auth.js");
// const router =express.Router();

cartRouter.get("/:id", Auth,getCartData);
cartRouter.post("/PostInCart",Auth,postToCart);
cartRouter.put("/inc/:id",Auth,incrementQty);
cartRouter.put("/dec/:id",Auth,decrementQty);
cartRouter.delete("/:id", Auth,deleteProduct);
module.exports=cartRouter