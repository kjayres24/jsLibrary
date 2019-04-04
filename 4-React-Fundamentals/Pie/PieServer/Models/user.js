module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true //if you already have an email in the site, it wont let you sign up again. 
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return User;
}