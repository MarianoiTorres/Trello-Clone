/*import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import UserModel from "../models/usersModel";

dotenv.config()

const sequelize = new Sequelize(<string>process.env.DB_NAME, <string>process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

async function syncModels() {
    await sequelize.sync({force: true});
    console.log('Tablas creadas en la base de datos');
  }
  
  // Llamo a la función syncModels para sincronizar los modelos -> Para crear las tablas en la DB
  syncModels()

export default sequelize;
*/ 
