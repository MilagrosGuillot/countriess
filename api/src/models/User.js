const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // Agregar las propiedades timestamps para que Sequelize maneje las columnas createdAt y updatedAt automáticamente
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
}
