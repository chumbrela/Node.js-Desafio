import { MovieNotes } from '@/movie-notes/entities/movie-notes.entity';
import { User } from '@/users/entities/user.entity';
import { join } from 'node:path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'mydatabase',
  entities: [User, MovieNotes],
  migrations: [join(__dirname, 'migrations/*.ts')],
  synchronize: false,
  logging: true,
});
