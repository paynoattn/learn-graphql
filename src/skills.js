'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define('Skills', {
    name: DataTypes.STRING
  }, {});
  Skills.associate = function(models) {
    // associations can be defined here
  };
  return Skills;
};