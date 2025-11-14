import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../contants/app.contant.js";

const sequelize = new Sequelize(DATABASE_URL);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;