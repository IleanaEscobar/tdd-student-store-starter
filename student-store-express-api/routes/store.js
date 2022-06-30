const express = require('express');
const StoreModel = require('../models/store')
// const app = express();
// CustomElementRegistry PORT = 3001;

// Single routing
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await StoreModel.listProducts()
        res.status(200).json({ products })
      } catch (err) {
        next(err)
      }
})
// /:productId
// fetch single product
router.get("/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId
      const product = await StoreModel.fetchProductById(productId)
      if (!product) {
        throw new Error("Product not found")
      }
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
  })

  router.post("/", async (req, res, next) => {
    console.log('hi hoe')
    try {
      const purchase = req.body
      console.log(" purchase: " + purchase)
      const newPurchase = await StoreModel.createPurchaseOrder(purchase)
      res.status(201).json({ "purchase" : newPurchase })
    } catch (err) {
      next(err)
    }
  })

module.exports = router
