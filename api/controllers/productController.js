const db = require("../models");

const products = db.products;

const addPostController = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({
      message: "Please insert Title",
    });
    return;
  }

  const productInfo = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  try {
    const product = await products.create(productInfo);

    if (product) {
      res.status(200).json({
        message: "Product Created successfully!",
        product: product,
      });
    } else {
      res.status(400).json({
        message: "Inavalid Product!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
      error: error.message,
    });
  }
};

// Get All product

const getAllProductController = async (req, res) => {
  try {
    const products = await db.products.findAll({});

    if (products) {
      res.status(200).json({
        products: products,
      });
    } else {
      res.status(400).json({
        message: "Products is not found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
      error: error.message,
    });
  }
};

module.exports = { addPostController, getAllProductController };
