module.exports = function(sequelize, DataTypes) {
    var CodeResource = sequelize.define("CodeResource", {
      topic: DataTypes.STRING,
      url: DataTypes.STRING,
      comments: DataTypes.STRING
    });
    return CodeResource;
  };