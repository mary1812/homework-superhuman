'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superpower.belongsTo(models.Hero, {
        through: 'hero_to_powers',
        foreignKey: 'heroId'
      })
    }
  };
  Superpower.init({
    power: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
    }
    }
  }, {
    sequelize,
    modelName: 'Superpower',
    underscored: true,
    tableName: 'superpower'
  });
  return Superpower;
};
