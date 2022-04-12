module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductStock';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },        
       
        id_product: {
            type: dataTypes.BIGINT(10),
            allowNull: true
        },

        quantity: {
            type: dataTypes.INTEGER,
            allowNull: true
        },  
        break_point: {
            type: dataTypes.INTEGER,
            allowNull: true
        }  
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-stock"
        
    }
    const ProductStock = sequelize.define(alias, cols, config); 
    

    return ProductStock
};