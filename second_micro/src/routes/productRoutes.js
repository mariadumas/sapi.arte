const router = require("express").Router();

const { diskStorage } = require("multer");
const multer = require("multer");
const path = require("path");

const productController = require("../controllers/productController")



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





router.get("/list", productController.list)

router.get("/create", productController.create)
router.post("/create", upload.single("image"), productController.save)
router.get("/edit/:id", productController.edit)
router.put("/edit/:id", upload.single("image"), productController.update)
router.delete("/destroy/:id", productController.destroy)


router.get("/:id", productController.detail)





module.exports = router


