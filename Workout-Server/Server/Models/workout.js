module.exports = function (sequelize, DataTypes) {
    return sequelize.define('workoutdata', {
        result: DataTypes.STRING,
        description: DataTypes.STRING,
        definition: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
};

