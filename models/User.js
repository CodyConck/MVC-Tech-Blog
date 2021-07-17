const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    pwcheck(loginPW) {
        return bcrypt.compareSync(loginPW, this.password)
    }
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            async beforeCreatePW(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData;
            },
            async beforeUpdatePW(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
)

module.exports = User