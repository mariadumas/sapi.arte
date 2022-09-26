const router = require("express").Router()
const { diskStorage } = require("multer");
const multer = require("multer");
const path = require("path");

const userController = require("../controllers/userController")


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



router.get("/list", userController.list)
router.get("/:id", userController.detail)

router.get("/register", userController.register)
router.post("/register", upload.single("avatar"), userController.save)

router.get("/edit/:id", userController.edit)
router.put("/edit/:id", upload.single("avatar"), userController.update)

router.delete("/destroy/:id", userController.destroy)


module.exports = router