const express = require('express');
const router = express.Router();
const Vendor = require('../models/Seller'); // Update with the actual path to your model file
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
// const { body, validationResult } = require('express-validator');// 
const jwtSecret = process.env.jwtSecret
router.post(
  "/createvendor",
  async (req, res) => {
      try {
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.vendorpassword, salt);
  
        const newVendor = new Vendor({
          vendorname: req.body.vendorname,
          vendorcompany: req.body.vendorcompany,
          vendornumber: req.body.vendornumber,
          vendorpassword: securePassword,
          vendoraddress: req.body.vendoraddress,
        });
        const savedVendor = await newVendor.save();
    
        const data = {
          user:{
            id:newVendor.id
          }
        }
        const sellToken = jwt.sign(data,jwtSecret)
  
        res.status(201).json({success:true, vendor:savedVendor ,sellToken:sellToken});
      
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
      }
    
  );
  
  module.exports = router;


