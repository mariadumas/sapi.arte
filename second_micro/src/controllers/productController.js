const db = require("../database/models")


const productController = {
    create: (req, res) => {
        db.Collection.findAll()
        .then((collections)=>{
            return res.render("create", {collections: collections, title: "Crear producto"})
        })
        .catch((error)=>{
            console.log(error);
        })


    },
    save: (req, res) => {

    }
}

module.exports = productController