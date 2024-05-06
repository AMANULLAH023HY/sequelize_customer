const express = require("express");
const { addPostController, getAllProductController, getSingleProductController } = require("../controllers/productController");

const router = express.Router();



router.post("/addPost", addPostController);
router.get("/getAllProduct", getAllProductController);
router.get("/getSingleProduct/:id", getSingleProductController);


module.exports = router;