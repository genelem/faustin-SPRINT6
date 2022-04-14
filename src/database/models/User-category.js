module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },      
        
        number_card: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        bank_card: {
            type: dataTypes.STRING(100),
            allowNull: true
        }         
        }    
    
    let config = {
        timestamps: false,
        tableName:"user-category"
        
    }
    /*const ProductStock = sequelize.define(alias, cols, config); 
    ProductStock.associate = function (models) {
        ProductStock.belongsTo(models.Product, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "stockp",
            foreignKey: "id_product"
        })
    }*/
    const UserCategory = sequelize.define(alias, cols, config); 

    return UserCategory
};