'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
        }
    };
    History.init(
        {
            patientId: DataTypes.INTEGER,       // id của bảng patient - bệnh nhân
            doctorId: DataTypes.INTEGER,        // id của bảng doctor      
            description: DataTypes.TEXT,
            files: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'History',
        }
    );
    return History;
};