'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      speciesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Species',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      aliveStatus: {
        allowNull: false,
        type: Sequelize.ENUM('ALIVE', 'DEAD', 'UNDEAD')
      },
      magicalStatus: {
        allowNull: false,
        type: Sequelize.ENUM('MAGICAL', 'NON_MAGICAL', 'OTHER')
      },
      relationshipStatus: {
        allowNull: false,
        type: Sequelize.ENUM('SINGLE', 'MARRIED', 'OTHER')
      },
      partnerId: {
        type: Sequelize.INTEGER
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('MALE', 'FEMALE', 'OTHER')
      },
      bio: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Characters');
  }
};

