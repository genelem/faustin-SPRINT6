module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductType';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        type_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        }        
    };         
    
    let config = {
        timestamps: false,
        tableName:"Product-type"
        
    }
    const ProductType = sequelize.define(alias, cols, config); 

    //ProductType.associate = function(models) {
    //    ProductType.hasMany(models.Product, {
     //       as:"typesP",
     //       foreignKey:"id_type"
     //   })
    //}
    

    return ProductType
};