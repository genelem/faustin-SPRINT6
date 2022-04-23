module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductYear';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
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
  /*  ProductYear.associate = function(models) {
        ProductYear.hasMany(models.Product, {
            as:"yearsP",
            foreignKey:"id_product_year"
        })
    }*/

    return ProductYear
};