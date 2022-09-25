const router = require("express").Router();

const { diskStorage } = require("multer");
const multer = require("multer");
const path = require("path");

const mainController = require("../controllers/mainController");


const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, path.join(__dirname, "../../public/images"))
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + path.extname(file.originalname);  
        cb (null, newFileName) 
    }
})

const upload = multer({ storage: storage });


router.get("/", mainController.index)
router.get("/viva", mainController.viva)
router.get("/aguas", mainController.aguas)
router.get("/trazo", mainController.trazo)
router.get("/papel", mainController.papel)

router.get("/list", mainController.list)

router.get("/create", mainController.create)
router.post("/create", upload.single("image"), mainController.save)

router.get("/:id", mainController.detail)



module.exports = router;