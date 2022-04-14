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
    return User
};