import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/postgres";

const defineUserModel = (sequelize: Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return User;
}

const UserModel = defineUserModel(sequelize)
export default UserModel

