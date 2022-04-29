const productColor = require("./product-color");

module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    description2: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: dataTypes.INTEGER(10),
      allowNull: true,
    },
    id_type: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      allowNull: true,
    },
    id_colection: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      allowNull: true,
    },
    id_product_year: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      allowNull: true,
    },

    dto: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    created: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    updated: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    image_ppal: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    image_back: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    image_det1: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    image_det2: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    image_det3: {
      type: dataTypes.STRING,
      allowNull: true,
    },
  };
  let config = {
    tableName: "product",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.ProductType, {    
      as: "pType",
      foreignKey: "id_type",
    });
    Product.belongsTo(models.ProductColection, {       
      as: "pColection",
      foreignKey: "id_colection",
    });

    Product.belongsTo(models.ProductYear, {      
      as: "pYear",
      foreignKey: "id_product_year",
    });

    Product.belongsToMany(models.ProductColor, {      
      as: "coloresDB",
      through: "product-color-product",
      foreignKey: "id_product",
      otherKey: "id_color",
      timestamps: false,
    });
  };

  return Product;
};
