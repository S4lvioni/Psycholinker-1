'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Observacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Observacao.init({
    texto: DataTypes.STRING,
    terapeutaId: DataTypes.INTEGER,
    pacienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Observacao',
  });
  return Observacao;
};