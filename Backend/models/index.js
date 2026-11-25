import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const requiredConfig = ['TIDB_HOST', 'TIDB_USER', 'TIDB_PASSWORD', 'TIDB_DB_NAME'];
const missingConfig = requiredConfig.filter((key) => !process.env[key]);

if (missingConfig.length > 0) {
    throw new Error(`Missing TiDB configuration in Backend/.env: ${missingConfig.join(', ')}`);
}

const sequelize = new Sequelize(
    process.env.TIDB_DB_NAME,
    process.env.TIDB_USER,
    process.env.TIDB_PASSWORD,
    {
        host: process.env.TIDB_HOST,
        port: Number(process.env.TIDB_PORT),
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                minVersion: 'TLSv1.2',
                rejectUnauthorized: true,
            },
        },
        logging: false,
    }
);
export default sequelize;
