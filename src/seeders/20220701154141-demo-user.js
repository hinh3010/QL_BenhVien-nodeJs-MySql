'use strict';


module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'xuanhinh301099@gmail.com',
                password: '123456',
                firstName: 'Xuan',
                lastName: 'Hinh',
                address: 'Đan Phượng',
                phoneNumber: '0916425137',
                gender: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
