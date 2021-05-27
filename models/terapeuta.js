'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terapeuta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Terapeuta.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cr: DataTypes.STRING,
    email: DataTypes.STRING,
    especializacao: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Terapeuta',
  });
  return Terapeuta;
};