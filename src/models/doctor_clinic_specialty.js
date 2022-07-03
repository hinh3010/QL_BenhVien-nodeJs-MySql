'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class DoctorClinicSpecialty extends Model {
        static associate(models) {
        }
    };
    DoctorClinicSpecialty.init(
        {
            doctorId: DataTypes.INTEGER,        // id của bảng doctor
            clinicId: DataTypes.INTEGER,        // id của bảng clinic
            specialtyId: DataTypes.INTEGER,     // id của bảng specialty
        },
        {
            sequelize,
            modelName: 'DoctorClinicSpecialty',
        }
    );
    return DoctorClinicSpecialty;
};