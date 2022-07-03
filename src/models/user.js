'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {

		}
	}
	User.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			address: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			gender: DataTypes.BOOLEAN,
			image: DataTypes.STRING,
			roleId: DataTypes.STRING,			// quyền
			positionId: DataTypes.STRING,		// chức vụ , vị trí
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};