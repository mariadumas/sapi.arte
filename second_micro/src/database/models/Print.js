module.exports = (sequelize, DataTypes) => {
    const Print = sequelize.define("Print", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false

        },
        img1: {
            type: DataTypes.STRING

        },
        img2: {
            type: DataTypes.STRING

        },
        img3: {
            type: DataTypes.STRING

        },
        img4: {
            type: DataTypes.STRING

        },
        img5: {
            type: DataTypes.STRING

        },
        img6: {
            type: DataTypes.STRING

        },



    },
        {
            tableName: "prints",
            timestamps: false
        })





    return Print
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