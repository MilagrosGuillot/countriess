const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      bandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.INTEGER,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
  
  });
}
