'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsToMany(models.Staff, {through:'ProjectStaffs'})
    }
  };
  Project.init({
    name: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};