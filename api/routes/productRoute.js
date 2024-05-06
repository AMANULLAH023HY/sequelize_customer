const express = require("express");
const { addPostController, getAllProductController } = require("../controllers/productController");

const router = express.Router();



router.post("/addPost", addPostController);
router.get("/getAllProduct", getAllProductController);


module.exports = router;