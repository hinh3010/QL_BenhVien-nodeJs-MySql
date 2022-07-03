'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Schedule extends Model {
        static associate(models) {
        }
    };
    Schedule.init(
        {
            currentNumber: DataTypes.INTEGER,
            maxNumber: DataTypes.INTEGER,
            date: DataTypes.DATE,
            timeType: DataTypes.STRING,
            doctorId: DataTypes.INTEGER,        // id của bảng doctor
        },
        {
            sequelize,
            modelName: 'Schedule',
        }
    );
    return Schedule;
};