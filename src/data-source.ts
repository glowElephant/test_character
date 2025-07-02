import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'test_character',
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
