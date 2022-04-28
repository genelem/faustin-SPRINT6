module.exports = (sequelize, dataTypes) => {
    let alias = 'Invoice';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        }, 
        number: {
            type: dataTypes.INTEGER(50),
            allowNull: true
        }, 
        invoice_date: {
            type: dataTypes.DATE,
            allowNull: true
        }, 
        id_user: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        }, 
        delivery_dir: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        delivery_cost: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        },
        total: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        }
    };         
    
    let config = {
        timestamps: false,
        tableName:"invoice"
        
    }

    const Invoice = sequelize.define(alias, cols, config);

    Invoice.associate = function (models) {
        Invoice.belongsToMany(models.Product, {      
            as: "prodInvoice",
            through: "invoice-item",
            foreignKey: "id_product",
            otherKey: "id_invoice",
            timestamps: false,
          });
          Invoice.belongsTo(models.User, {    
            as: "invoiceUser",
            foreignKey: "id_user",
          })
          
    }
    return Invoice
};