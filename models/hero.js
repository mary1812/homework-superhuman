'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsToMany(models.Superpower, {
        through: 'hero_to_powers',
        foreignKey: 'heroId'
      })
    }
  };
  Hero.init({
    nickname: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
    }},
    realName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'real_name',
      validate: {
        notNull: true,
        notEmpty: true
      }},
      originDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'origin_description',
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
    catchPhrase: {
      type: DataTypes.STRING(64),
      allowNull: false,
        field: 'catch_phrase',
        validate: {
          notNull: true,
          notEmpty: true
        }
    }
  },
    {
    sequelize,
      modelName: "Hero",
      underscored: true,
    tableName: 'heros'
  });
  return Hero;
};