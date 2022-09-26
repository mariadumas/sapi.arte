const db = require("../database/models")



const userController = {
    list: (req, res) => {
        db.User.findAll()
        .then((users)=>{
            res.render("user/usersList", {users:users, title: "Lista de usuarios"})
        })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((user)=>{
            res.render("user/usersDetail", {user:user, title: user.first_name + " " + user.last_name})
        })
    },
    register: (req, res) => {
        res.render("user/register", {title: "Crear cuenta"})
    },
    save: (req, res) => {
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            avatar: req.file.filename,
            dni: req.body.dni,
            birth_date: req.body.birth_date,
            address: req.body.address
        })
        .then(()=> {
            res.redirect("/")
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    edit: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((user)=> {
            res.render("user/editUser", {user: user, title: "Editar perfil"})
        })
    },
    update: (req, res) => {

        const imagen = db.User.findOne({where: {id: req.params.id}})

        db.User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            avatar: req.file? req.file.filename: imagen.avatar,
            dni: req.body.dni,
            birth_date: req.body.birth_date,
            address: req.body.address
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect("/user/" + req.params.id)
        })
        .catch((error)=> {
            console.log(error);
        })

    },
    destroy: (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect("/user/list")
        })
        .catch((error)=>{
            console.log(error);
        })
    }


}

module.exports = userController;