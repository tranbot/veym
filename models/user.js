module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // @readthis These below are columns inside of the "User" table defined above
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  });

  // @readthis This associates the User (typically a parent) to their children
  User.associate = function(models) {
    User.hasMany(models.Student, {});
  }
  return User;
};
