import express from 'express';
import tasksRouter from './routes/tasks';
import bodyParser from 'body-parser';
import { createConnection, ConnectionOptions } from 'typeorm';
import { Task } from './entities/Task';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'kushal@123',
  database: 'todo',
  synchronize: true,
  entities: [Task],
};

createConnection(connectionOptions)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => console.log(error));

// Routes
app.use('/tasks', tasksRouter);


app.set('views', path.join(__dirname, 'views'));
// Add this line to log the current directory
console.log(__dirname);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
