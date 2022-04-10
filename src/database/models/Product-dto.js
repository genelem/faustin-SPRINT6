module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductDto';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },        
        start_dto_date: {
            type: dataTypes.DATE,
            allowNull: true
        },   
        end_dto_date: {
            type: dataTypes.DATE,
            allowNull: true
        },
        id_product: {
            type: dataTypes.BIGINT(10),
            allowNull: true
        },
        dto: {
            type: dataTypes.BIGINT(3),
            allowNull: true
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-dto"
        
    }

    const ProductDto = sequelize.define(alias, cols, config); 
    ProductDto.associate = function (models) {
        ProductDto.belongsTo(models.Product, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "dtoP",
            foreignKey: "id_product"
        })
    }


    return ProductDto
};