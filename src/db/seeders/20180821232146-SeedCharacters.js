'use strict';

let characters = require('./characters-seeds.json');

characters = characters.map((char, index) => {
  return { 
    id: index + 1, 
    ...char,
    createdAt: new Date(), 
    updatedAt: new Date() };
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Characters', characters, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Characters', null, {});
  }
};
