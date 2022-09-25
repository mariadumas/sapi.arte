module.exports = (sequelize, DataTypes) => {
    const Painting = sequelize.define("Painting", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        price: {
            type: DataTypes.INTEGER

        },

        size: {
            type: DataTypes.STRING
        },

        technique: {
            type: DataTypes.STRING

        },
        sold: {
            type: DataTypes.INTEGER

        },
        description: {
            type: DataTypes.STRING

        },
        image: {
            type: DataTypes.STRING

        },

    },
        {
            tableName: "paintings",
            timestamps: false
        })


    Painting.associate = (models) => {
        Painting.belongsTo(models.Collection, {
            as: "collections",
            foreignKey: "collection_id"
        })

    } 


    return Painting
}






//Con otra sintaxis


// const { DataTypes } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {

//     let alias = "Painting"
//     // se especifican las columnas de la db en un objeto literal
//     let cols = {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         }, 
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false

//         }, 
//         price: {
//             type: DataTypes.INTEGER

//         }, 

//         size: {
//             type: DataTypes.STRING
//         },

//         technique: {
//             type: DataTypes.STRING

//         },
//         sold: {
//             type: DataTypes.INTEGER

//         },
//         description: {
//             type: DataTypes.STRING

//         },
//         image: {
//             type: DataTypes.STRING

//         },

//     };

//     let config = {
//         tableName: "paintings",
//         timestamps: false
//     }

//     const Painting = sequelize.define(alias, cols, config)

//     //después del define, establecemos las relaciones

//     Painting.associate = (models) => {
//         Painting.belongsTo(models.Collection, {
//             as: "coleccion",
//             foreignKey: "collection_id"
//         })

//     }


//     return Painting;


// }