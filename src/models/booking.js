'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Booking extends Model {
		static associate(models) {
		}
	};
	Booking.init(
		{
			statusId: DataTypes.STRING,		// id của bảng allcode
			doctorId: DataTypes.INTEGER,	// id của bảng doctor
			patientId: DataTypes.INTEGER,	// id của bảng patient - bệnh nhân
			date: DataTypes.DATE,
			timeType: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Booking',
		}
	);
	return Booking;
};