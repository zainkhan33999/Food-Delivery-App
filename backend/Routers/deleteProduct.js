const express = require('express');
const router = express.Router();
const Product = require("../models/Product");
router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        
        // Find the product by ID and remove it from the collection
        const deletedProduct = await Product.findByIdAndRemove(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        
        // Remove the product from global.food_items array
        const index = global.food_items.findIndex(product => product._id.toString() === productId);
        if (index !== -1) {
            global.food_items.splice(index, 1);
        }
        
        res.status(200).json({ success: true, product: deletedProduct });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

    module.exports = router