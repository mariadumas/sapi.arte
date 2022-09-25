const productController = require("../controllers/productController")

const router = require("express").Router();

router.get("/create/", productController.create)
router.post("/create", productController.save)