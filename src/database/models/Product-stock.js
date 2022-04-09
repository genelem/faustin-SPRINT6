module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductStock';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },        
       
        id_product: {
            type: dataTypes.INT(10),
            allowNull: true
        },

        quantity: {
            type: dataTypes.INT(8),
            allowNull: true
        },  
        break_point: {
            type: dataTypes.INT(8),
            allowNull: true
        }  
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-stock"
        
    }
    const ProductStock = sequelize.define(alias, cols, config); 

    ProductStock.associate = function (models) {
        ProductStock.belongsTo(models.Product, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "stock",
            foreignKey: "id_product"
        })
    }

    return ProductStock
};