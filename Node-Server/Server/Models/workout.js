module.exports = function (sequelize, DataTypes) {
    return sequelize.define('workoutdata', {
        id: DataTypes.INTEGER,
        result: DataTypes.STRING,
        description: DataTypes.STRING,
        definition: DataTypes.STRING
    });
};