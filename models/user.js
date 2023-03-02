const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    },
  },
  user_created: {
    type: DataTypes.DATE,
  },
  
},
{hooks: {
  beforeCreate: async (newUserData) => {
    newUserData.email = await new UserData.email.toLowerCase();
    newUserData.username = await new UserData.username.toLowerCase();
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
  },

  // beforeUpdate hook ??
},
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: "user",});

module.exports = User;