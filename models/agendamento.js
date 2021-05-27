'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Agendamento.init({
    data_interresse: DataTypes.DATE,
    datasId: DataTypes.INTEGER,
    pacienteId: DataTypes.INTEGER,
    terapeutaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agendamento',
  });
  return Agendamento;
};