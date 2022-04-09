module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductYear';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        year_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-year"
        
    }
    const ProductYear = sequelize.define(alias, cols, config); 


    return ProductYear
};