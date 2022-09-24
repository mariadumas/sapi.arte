const mainController = require("../controllers/mainController");

const router = require("express").Router();


router.get("/", mainController.index)
router.get("/viva", mainController.viva)
router.get("/aguas", mainController.aguas)
router.get("/trazo", mainController.trazo)
router.get("/papel", mainController.papel)

router.get("/list", mainController.list)

module.exports = router;