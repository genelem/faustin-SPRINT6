module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductSale';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },        
        date_week_max: {
            type: dataTypes.DATE,
            allowNull: true
        },
        date_week_min: {
            type: dataTypes.DATE,
            allowNull: true
        },
        id_product: {
            type: dataTypes.BIGINT(10),
            allowNull: true
        },
        dtoSale: {
            type: dataTypes.BIGINT(3),
            allowNull: true
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-sale"
        
    }

    const ProductSale = sequelize.define(alias, cols, config);

    ProductSale.associate = function (models) {
        ProductSale.belongsTo(models.Product, {    
          as: "saleP",
          foreignKey: "id_product",
        });
    }
    return ProductSale
};