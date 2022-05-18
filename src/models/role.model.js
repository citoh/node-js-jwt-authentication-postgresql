const { Model, DataTypes } = require('sequelize')

class Role extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        },{
            tableName: 'roles',
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.User, {
            through: "users_roles",
            foreignKey: "role_id",
            otherKey: "user_id"
        });
    }
}

module.exports = Role