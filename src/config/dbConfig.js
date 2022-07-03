import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ql_benhvien', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối db thành công.');
    } catch (error) {
        console.error('Không thể kết nối với db :', error.message);
    }
}

export default connectDB