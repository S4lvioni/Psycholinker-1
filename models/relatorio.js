'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relatorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Relatorio.belongsTo(models.Paciente);
      Relatorio.belongsTo(models.Terapeuta);
      Paciente.hasMany(models.Medicacao);

    }
  };
  Relatorio.init({
    atividadeId: DataTypes.INTEGER,
    pacienteId: DataTypes.INTEGER,
    terapeutaId: DataTypes.INTEGER,
    humor: DataTypes.INTEGER,
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relatorio',
  });
  return Relatorio;
};