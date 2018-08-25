'use strict';

let speciesSeeds = require('./species-seeds.json');

speciesSeeds = speciesSeeds.map((species, index) => {
  return {
    id: index + 1,
    name: species,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Species', speciesSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Species', null, {});
  }
};
