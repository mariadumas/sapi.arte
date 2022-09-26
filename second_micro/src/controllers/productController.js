const db = require("../database/models")

const productController = {

    detail: (req, res) => {
        db.Painting.findByPk(req.params.id, {
            include: [
            {
                association: "collections",
                attribute: "name"
            }
        ]})

        .then( function (painting)  {
            res.render("product/detail", {painting: painting, title: painting.name})
        })
        .catch( (error)=> {
            console.log(error)
        })

    }, 

    list: (req, res) => {

        db.Painting.findAll({
            include:[{
                association: "collections",
                attribute: "name"
            }
            ]
        })
        .then(function (paintings) {

            res.render("product/list", {paintings: paintings, title: "Todos los cuadros"})
        })
        .catch((error)=>{
            console.log(error);
        }) 
    },

    create: (req, res) => {
        db.Collection.findAll()
        .then(function (collections) {
             res.render("product/create", {collections:collections, title: "Crear producto"})
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    save: (req, res) => {
        db.Painting.create({
            name: req.body.name,
            collection_id: req.body.collection,
            price: req.body.price,
            size: req.body.size,
            technique: req.body.technique,
            sold: req.body.sold,
            description: req.body.description,
            image: req.file.filename,
        })
        .then(()=> {
            res.redirect("/product/list")
        })
        .catch((error)=> {
            console.log(error);
        })

    },
    edit: (req, res) => {
        
        let pedidoPaintings = db.Painting.findByPk(req.params.id);
        let pedidoCollections = db.Collection.findAll()
        
        
        Promise.all([pedidoPaintings, pedidoCollections]) 
            .then(function ([painting, collections]) {
             res.render("product/edit", {painting:painting, collections:collections, title: "Editar producto"})})
            
            .catch((error)=>{
            console.log(error);
            })

    },
    update: (req, res) => {

        const imagenPainting = db.Painting.findOne({ where: { id:req.params.id } });

        db.Painting.update({
            name: req.body.name,
            collection_id: req.body.collection,
            price: req.body.price,
            size: req.body.size,
            technique: req.body.technique,
            sold: req.body.sold,
            description: req.body.description,
            image: req.file ? req.file.filename: imagenPainting.image
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(){
         res.redirect("/product/list")
        })
        
        .catch(function(error){
            console.log(error)
        })
    },
    destroy: (req, res) => {
        db.Painting.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect("/product/list")
        })
        .catch((error)=>{
            console.log(error);
        })
    }


}

module.exports = productController;