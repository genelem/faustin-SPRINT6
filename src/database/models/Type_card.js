module.exports = (sequelize, dataTypes) => {
    let alias = 'TypeCard';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        card_type_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
                
    };         
    
    let config = {
        timestamps: false,
        tableName:"Type_card"
        
    }
    const TypeCard = sequelize.define(alias, cols, config); 

    return TypeCard
};