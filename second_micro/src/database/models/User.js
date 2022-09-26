module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,

        },
        birth_date: {
            type: DataTypes.DATE
        },
        avatar: {
            type: DataTypes.STRING
        },
        isAdmin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }

    },
    {
        tableName: "users",
        timestamps: false,
    }
    )



    return User
}