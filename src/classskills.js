'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classskills = sequelize.define('Classskills', {
    name: DataTypes.STRING
  }, {});
  Classskills.associate = function(models) {
    // associations can be defined here
  };
  return Classskills;
};