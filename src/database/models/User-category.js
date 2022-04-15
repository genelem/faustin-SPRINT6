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
    
    const UserCategory = sequelize.define(alias, cols, config); 
    
    UserCategory.associate = function (models) {
        UserCategory.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "categoryU",
            foreignKey: "id_user"
        })
    }
    return UserCategory
};