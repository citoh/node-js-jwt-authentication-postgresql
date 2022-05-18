const { Model, DataTypes } = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },{
            tableName: 'users',
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.Role, {
            through: "users_roles",
            foreignKey: "user_id",
            otherKey: "role_id"
        });

        //this.hasMany(models.Token, {foreignKey: 'user_id', as: 'tokens'})
    }
}

module.exports = User