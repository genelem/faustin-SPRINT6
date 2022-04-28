module.exports = (sequelize, dataTypes) => {
    let alias = "UserTax";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },   
        id_user: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
            
        },   
        tax_condition: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        cuit: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        cuil: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        ingresosBrutos: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        retGanancias: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
        
    };         
    
    let config = {
        tableName:"user-taxes",
        timestamps: false    
    }
    const UserTax = sequelize.define(alias, cols, config); 


    UserTax.associate = function (models) {
        UserTax.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "taxU",
            foreignKey: "id_user"
        })
    }
    

    return UserTax
};