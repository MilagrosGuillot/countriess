const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        temporada: {
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull: false,
        },
    })
}