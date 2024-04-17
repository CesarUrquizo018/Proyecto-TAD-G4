// otros.js

class Otros extends Model {}

Otros.init({
  id_otros: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  NombrOtro: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  DescripcinOtro: {
    type: DataTypes.TEXT,
    allowNull: true // Cambia a false si la columna no debe ser nula
  },
  id_proyecto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Otros',
  tableName: 'otros',
  timestamps: false
});

module.exports = Otros;