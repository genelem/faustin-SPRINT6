module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCard';
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
        tableName:"user_cards",
        timestamps: false        
        
    }
     const UserCard = sequelize.define(alias, cols, config); 

        UserCard.associate = function (models) {
        UserCard.belongsTo(models.TypeCard, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "tcard",
            foreignKey: "type_card"
        })

    }
    

    return UserCard
};