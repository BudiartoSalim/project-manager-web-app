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
    name: {type: DataTypes.STRING, 
    validate: {
      isAccepted(value){
        if (value.length < 3){
          throw new Error(`Project Name minimal 3 huruf`)
        } else if (value.length >255){
          throw new Error(`Project Name terlalu panjang!`)
        }
      }
    }},
    isCompleted: DataTypes.BOOLEAN,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};