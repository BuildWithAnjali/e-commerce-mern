
const express = require('express');

const {
    getFilterdProducts,
    getProductsDetails
   
  } = require("../../controllers/shop/products-controller");
  
  
  const router = express.Router();
  
 
  router.get("/get", getFilterdProducts);
  router.get("/get/:id", getProductsDetails);
  
  module.exports = router;