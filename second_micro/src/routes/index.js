const router = require("express").Router();

const mainController = require("../controllers/mainController");




router.get("/", mainController.index)
router.get("/obras", mainController.obras)
router.get("/obras/viva", mainController.viva)
router.get("/obras/aguas", mainController.aguas)
router.get("/obras/trazo", mainController.trazo)
router.get("/obras/papel", mainController.papel)
router.get("/obras/espacios", mainController.espacios)
router.get("/faq", mainController.faq)

module.exports = router;