const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    
    const Collection = sequelize.define("Collection", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false

        }
    },

    {
        tableName: "collections",
        timestamps: false

    })
    
    
 
    Collection.associate = (models) => {
        Collection.hasMany(models.Painting, {
            as: "paintings",
            foreignKey: "collection_id"
        })}

    return Collection;


}