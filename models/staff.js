'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Staff.belongsToMany(models.Project, {through:'ProjectStaffs'})
    }
  };
  Staff.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    position: DataTypes.STRING,
    email: DataTypes.STRING,
    discordId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Staff',
  });

  Staff.addHook('afterFind', (data, options)=>{
    if (Array.isArray(data)){
      data.forEach(elem=>{
        elem.name = `${elem.first_name} ${elem.last_name}`
      })
    } 
    else {
      data.name = `${data.first_name} ${data.last_name}`
    }

  })

  return Staff;
};