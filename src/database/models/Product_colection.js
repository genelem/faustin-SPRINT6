module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductColection';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        colection_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-colection"
        
    }
    const ProductColection = sequelize.define(alias, cols, config); 


    return ProductColection
};