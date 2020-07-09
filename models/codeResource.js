module.exports = function (sequelize, DataTypes) {
  var CodeResource = sequelize.define("CodeResource", {
    category: DataTypes.STRING,
    topic: DataTypes.STRING,
    url: DataTypes.STRING,
    comments: DataTypes.TEXT
  });
  return CodeResource;
};
