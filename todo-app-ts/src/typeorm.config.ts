// src/typeorm.config.ts
// src/typeorm.config.ts
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { Task } from './entities/Task';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'kushal@123',
  database: 'todo',
  entities: [Task],
  synchronize: true, // Don't use in production!
};

export default config;
