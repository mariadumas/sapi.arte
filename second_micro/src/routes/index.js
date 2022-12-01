const router = require("express").Router();

const mainController = require("../controllers/mainController");




router.get("/", mainController.index)
router.get("/viva", mainController.viva)
router.get("/aguas", mainController.aguas)
router.get("/trazo", mainController.trazo)
router.get("/papel", mainController.papel)
router.get("/espacios", mainController.espacios)
router.get("/faq", mainController.faq)

module.exports = router;