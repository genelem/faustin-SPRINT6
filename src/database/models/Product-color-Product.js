module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductColorProduct';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        id_color: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        id_product: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        }
             
    }; 
    let config = {
        timestamps: false,
        tableName:"Product-color-product"
        
    }
    const ProductColorProduct = sequelize.define(alias, cols, config); 


    return ProductColorProduct;
};