'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Specialty extends Model {
        static associate(models) {
        }
    };
    Specialty.init(
        {
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Specialty',
        }
    );
    return Specialty;
};