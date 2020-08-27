'use strict';
const Op = require('sequelize')

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
    first_name: {type: DataTypes.STRING,
    validate:{
      isAccepted(value){
        if (value.length < 3){
          throw new Error(`First Name minimal 3 huruf`)
        } else if (value.length >255){
          throw new Error(`First Name terlalu panjang!`)
        }
      }
    }
  },
    last_name: DataTypes.STRING,
    position: DataTypes.STRING,
    email: {type: DataTypes.STRING,
      validate: {
        isAccepted(value){
          if (value.length < 3){
            throw new Error(`Email minimal 5 huruf!`)
          } else if (value.length >255){
            throw new Error(`Email terlalu panjang!`)
          }
        }
      }
    },
    discordId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Staff',
  });

  Staff.addHook('beforeCreate', (data, options)=>{
    if (data.first_name.length < 1 && data.last_name.length > 1){
      data.first_name = data.last_name;
      data.last_name = "";
    }

    if(data.position.length < 1){
      data.position = `Newcomer`;
    }
    console.log(data.toJSON())
  })

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