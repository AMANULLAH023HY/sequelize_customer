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

// get single product

const getSingleProductController = async(req,res)=>{
  try {
    const id = req.params.id;

    const product = await products.findOne({where:{id: id}});
    if (product) {
      res.status(200).json({
        product: product,
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
}

// Update Product

const updateProductController = async (req, res) => {
  let id = req.params.id;
  const product = await products.update(req.body, { where: { id: id } });
  if (product) {
    res.status(200).json({
      message:"Product Updated successfully!",
      product: product,
    });
  } else {
    res.status(400).json({
      message: "Products is not found!",
    });
  }
};

module.exports = { addPostController, getAllProductController,getSingleProductController,updateProductController };
