module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },      
        userName: {
            type: dataTypes.STRING(12),
            allowNull: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        terminos: {
            type: dataTypes.INTEGER,
            allowNull: true
      
        }  
    };         
    
    let config = {
        tableName:"user",
        timestamps: false    
    }
    const User = sequelize.define(alias, cols, config); 

        User.associate = function (models) {
        User.belongsToMany(models.TypeCard, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Ucards",            
            through: 'UserCard',
            foreignKey: 'id_user',
            otherKey: 'type_card',
            timestamps: false
        }) }
        User.associate = function (models) {
            User.belongsTo(models.UserCategory, { // models.Genre -> Genres es el valor de alias en genres.js
                as: "Ucategory",
                foreignKey: "id_category"
            })
        }

    return User
};