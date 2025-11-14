import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

// định nghĩa User
const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(120), allowNull: false, unique: true },
}, { tableName: "users", timestamps: false });

// định nghĩa Restaurant
const Restaurant = sequelize.define("Restaurant", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(150), allowNull: false },
  address: { type: DataTypes.STRING(255) },
}, { tableName: "restaurants", timestamps: false });

// định nghĩa các model khác: Food, Like, Review, Order, OrderItem
// (tương tự như ví dụ Role bạn đã gửi)

// ... thiết lập các quan hệ giữa các model ...
Restaurant.hasMany(Food, { foreignKey: "restaurantId" });
Food.belongsTo(Restaurant, { foreignKey: "restaurantId" });
// v.v.

// đồng bộ bảng
await User.sync();
await Restaurant.sync();
// ...sync các model khác...

export {
  sequelize,
  User,
  Restaurant,
  Food,
  Like,
  Review,
  Order,
  OrderItem,
};
