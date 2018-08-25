'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      classId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Classes',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM(
          'Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion',
          'Necromancy', 'Transmutation', 'Universal'
        )
      },
      components: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.ENUM('V', 'S', 'M', 'F', 'DF', 'XP'))
      },
      castingTime: {
        type: Sequelize.INTEGER
      },
      range: {
        type: Sequelize.STRING
      },
      effect: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      resistant: {
        type: Sequelize.BOOLEAN
      },
      savingThrow: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Spells');
  }
};