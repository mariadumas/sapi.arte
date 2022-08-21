const mainController = require("../controllers/mainController");

const router = require("express").Router();


router.get("/", mainController.index)


module.exports = router;