module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      grade: DataTypes.INTEGER
    });
  
    // This defines relationship between the student and the User (typically parent account)
    Student.associate = function(models) {
      Student.belongsTo(models.User, {
          foreignKey: {
              allowNull: false
          }
      });
    }
    return Student;
  };
  