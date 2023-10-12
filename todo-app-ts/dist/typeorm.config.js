"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./entities/Task");
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'kushal@123',
    database: 'todo',
    entities: [Task_1.Task],
    synchronize: true, // Don't use in production!
};
exports.default = config;
