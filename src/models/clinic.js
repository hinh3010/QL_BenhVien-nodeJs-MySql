'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Clinic extends Model {
        static associate(models) {
        }
    };
    Clinic.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Clinic',
        }
    );
    return Clinic;
};