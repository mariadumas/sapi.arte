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
    }


}

module.exports = mainController;