const db = require("../database/models")


const mainController =  {
    index: (req, res) => {
        res.render("index")
    }, 
    viva: (req, res) => {
        res.render("viva")
    },
    trazo: (req, res) => {
        res.render("trazo")
    },
    aguas: (req, res) => {
        res.render("aguas")
    },
    papel: (req, res) => {
        res.render("papel")
    }, 

    list: (req, res) => {

        db.Painting.findAll()
        .then((paintings)=>{

            res.render("list", {paintings: paintings})
        })

        
    }


}

module.exports = mainController;