const productColor = require("./product-color");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        description2: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        id_type: {
            type: dataTypes.INT(10).UNSIGNED,
            allowNull: true
        },
        id_colection: {
            type: dataTypes.INT(10).UNSIGNED,
            allowNull: true
        },    
        id_product_year: {
        type: dataTypes.INT(10).UNSIGNED,
        allowNull: true
        },
        created: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated: {
            type: dataTypes.DATE,
            allowNull: true
        },
        image_ppal: {
            type: dataTypes.VARCHAR(80),
            allowNull: true
        },
        image_back: {
            type: dataTypes.VARCHAR(80),
            allowNull: true
        },
        image_det1: {
            type: dataTypes.VARCHAR(80),
            allowNull: true
        },
        image_det2: {
            type: dataTypes.VARCHAR(80),
            allowNull: true
        },
        image_det3: {
            type: dataTypes.VARCHAR(80),
            allowNull: true
        }
        
    };
    let config = {
        tableName:"product",
        timestamps: false
        
    }
    const Product = sequelize.define(alias, cols, config); 


    Product.associate = function (models) {
        Product.belongsTo(models.ProductType, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "pType",
            foreignKey: "product_type"
        })
    },
   
    Product.associate = function (models) {
        Product.belongsTo(models.ProductColection, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "pColection",
            foreignKey: "product_colection"
        })
    },
    Product.associate = function (models) {
        Product.belongsTo(models.ProductYear, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "pYear",
            foreignKey: "product_year"
        })
    }
  /*  Product.associate = function (models) {
        Product.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }*/

    return Product
};