module.exports = (sequelize, dataTypes) => {
    let alias = 'InvoiceItem';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },   
        id_invoice: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        }, 
        id_product: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        }, 
        quantity: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        },
        item_u_price: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        }, 
        id_user: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        made: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        }             
       
    };         
    
    let config = {
        timestamps: false,
        tableName:"invoice-item"
        
    }

    const InvoiceItem = sequelize.define(alias, cols, config);

    InvoiceItem.associate = function (models) {
        InvoiceItem.belongsTo(models.Invoice, {    
          as: "invoiceR",
          foreignKey: "id_invoice",
        });
        InvoiceItem.belongsTo(models.Product, {    
            as: "itemProduct",
            foreignKey: "id_product",
          })
    }
    return InvoiceItem
};