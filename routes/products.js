const router = require('express').Router();
const User = require('../models/Product');
const bcrypt = require("bcrypt");
const Product = require('../models/Product');
const { find } = require('../models/Product');

// Create
router.post('/create/new', async (req,res) => {
    const newProduct = new Product(req.body);

        try {
            const savedProduct = await newProduct.save();
            res.status(200).json({savedProduct,
            message: "product created successfully"})
        } catch (error) {
            res.status(500).json({error,
            message:"error occured while creating product"})
        }
        
    });

    // Get All products API with Search
    router.get("/:category", async (req,res) => {

          const category = req.params.category;
          console.log(req.params.category)

          try{  
            const product =await Product.find({categories:category});
        
          if(!product){

            return res.status(402).json({
                message:"Error in displaying products"
            })
            
          }else{
            return res.status(200).json({product,
                message:"Products displayed successfully"})
          }
          
          }catch(err){
            console.log(err);
            return res.status(500).json({
                message:"Error in displaying products"
            })
          }
        });
      
    
    
    module.exports = router;