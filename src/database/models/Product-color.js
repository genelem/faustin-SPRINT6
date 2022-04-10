module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductColor';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        color_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-color"
        
    }
    const ProductColor = sequelize.define(alias, cols, config); 


    return ProductColor
};