const db = require("../database/models")


const mainController =  {


    index: (req, res) => {
        res.render("index", {title: "sapi.arte"})
    },

    obras: (req, res) => {
        res.render("obras", {title: "Obras originales"})
    },

    prints: (req, res) => {
        db.Print.findAll()
        .then((prints)=> {

            res.render("prints", {prints: prints, title: "Prints"})

        })
        .catch((error)=>{
            console.log(error);
        })

    },

    printDetail: (req, res) =>{

        db.Print.findByPk(req.params.id)
        
        .then((print)=> {
            res.render("printDetail", {print:print, title: print.title})
        })
        .catch((error)=> {
            console.log(error);
        })

    },


    espacios: (req, res) => {
        res.render("espacios-vivos", {title: "Espacios vivos"})
    },

    faq: (req, res) => {
        res.render("faq", {title: "Preguntas frecuentes"})
    },




    
    viva: (req, res) => {

        db.Painting.findAll({
            where: {
                collection_id: 3
            }
        })
        .then((paintings)=>{
            res.render("viva", {paintings: paintings, title: "Viva"})
        })

        .catch((error)=>{
            console.log(error);
        })


       
    },




    trazo: (req, res) => {
        db.Painting.findAll({
            where: {
                collection_id: 1 
            }
        })
        .then((paintings)=> {
            res.render("trazo", {paintings: paintings, title: "Trazo"})
        })
        .catch((error)=>{
            console.log(error);
        })

    },




    aguas: (req, res) => {
        db.Painting.findAll({
            where: {
                collection_id: 2
            }
        })
        .then((paintings)=>{
        
            res.render("aguas", {paintings: paintings, title: "Aguas"})

        })

        .catch((error)=>{
            console.log(error);
        })

    },




    papel: (req, res) => {
        db.Painting.findAll({
            where: {
                collection_id: 4
            }
        })
        .then((paintings)=>{
            
            res.render("papel", {paintings: paintings, title: "Papel"})

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

            res.render("list", {paintings: paintings, title: "Todos los cuadros"})
        })
        .catch((error)=>{
            console.log(error);
        }) 
    },

    create: (req, res) => {
        db.Collection.findAll()
        .then(function (collections) {
             res.render("create", {collections:collections, title: "Crear producto"})
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
        });
        res.redirect("/list")
    },
    edit: (req, res) => {
        
        let pedidoPaintings = db.Painting.findByPk(req.params.id);
        let pedidoCollections = db.Collection.findAll()
        
        
        Promise.all([pedidoPaintings, pedidoCollections]) 
            .then(function ([painting, collections]) {
             res.render("edit", {painting:painting, collections:collections, title: "Editar producto"})})
            
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
         res.redirect("/list")
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
            res.redirect("/list")
        })
        .catch((error)=>{
            console.log(error);
        })
    }

}

module.exports = mainController;