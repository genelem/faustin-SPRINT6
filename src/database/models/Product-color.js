module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductColor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        color_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        color_image:{
            type : dataTypes.STRING(80),
            allowNull: true 
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-color"
        
    }
    const ProductColor = sequelize.define(alias, cols, config); 

    ProductColor.associate = function (models) {
        ProductColor.belongsToMany(models.Product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "coloresC",
            through: 'product-color-product',
            foreignKey: 'id_color',
            otherKey: 'id_product',
            timestamps: false
        })
    }

    return ProductColor
};