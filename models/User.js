const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create our User model

class User extends Model {}

//define table columns and configuration
User.init(
  {
    // define an id column
    id: {
      // use the special sequllize Datatype  object provide what type of data it is
      type: DataTypes.INTEGER,
      //this is the sql 'NOT NULL' option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in the table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password length <= 4
        len: [4],
      },
    },
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection
    sequelize,
    //dont automatically create createdAt/updatedAT time stamp fields
    timestamps: false,
    //dont pluralize name of database table
    freezeTableName: true,
    //use underscores instead of camel-casing
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
