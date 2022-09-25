const db = require("../database/models")


const mainController =  {
    index: (req, res) => {
        res.render("index", {title: "sapi.arte"})
    },
    detail: (req, res) => {
        db.Painting.findByPk(req.params.id, {
            include: [
            {
                association: "collections",
                attribute: "name"
            }
        ]})
        .then(function (painting) {
            res.render("detail", {painting: painting, title: painting.name})
        })
        .catch(function (error) {
            console.log(error)
        })

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
        .then((paintings)=>{

            res.render("list", {paintings: paintings, title: "Todos los cuadros"})
        })
        .catch((error)=>{
            console.log(error);
        })

        
    },

    create: (req, res) => {
        db.Collection.findAll()
        .then((collections)=>{
             res.render("create", {collections:collections, title: "Crear producto"})
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    save: (req, res) => {
        db.Painting.create(
            
        )
    }




}

module.exports = mainController;