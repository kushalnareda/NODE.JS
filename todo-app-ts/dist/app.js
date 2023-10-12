"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const Task_1 = require("./entities/Task");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const connectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kushal@123',
    database: 'todo',
    synchronize: true,
    entities: [Task_1.Task],
};
(0, typeorm_1.createConnection)(connectionOptions)
    .then(() => {
    console.log('Connected to database');
})
    .catch(error => console.log(error));
// Routes
app.use('/tasks', tasks_1.default);
app.set('views', path_1.default.join(__dirname, 'views'));
// Add this line to log the current directory
console.log(__dirname);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
