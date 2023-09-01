const router = require('express').Router();
const productsController = require('../controller/productsController');


// Create
router.post("/create", productsController.create);

 // Get All products API with Search
 router.get("/getAllDetails/:category", productsController.getAllProductDetails);


    
    
    module.exports = router;