const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// const { model } = require('mongoose');

const rolepermission = sequelize.define('rolepermission', {

    permissionId: { type: DataTypes.INTEGER,
        allowNull: true,
        references : {  
            model : permission,
            key : "id"
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references : {  
            model : role,
            key : "id"
        }
    },


}, {
    tableName: 'rolepermission'

});
rolepermission.belongsTo(permission,{foreignKey:"Id"})
rolepermission.belongsTo(role,{foreignKey : "Id"})
module.exports = rolepermission;