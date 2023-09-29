// App setup

const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'todo_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// ... (Routes)
/*
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});*/


// Creating the to-do routes

app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM todos', (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
        return;
      }
  
      res.json(results);
    });
  });
  
app.post('/tasks', (req, res) => {
    const task = req.body.task;
    const query = 'INSERT INTO todos (task) VALUES (?)';
  
    connection.query(query, [task], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error adding task' });
        return;
      }
  
      res.json({ message: 'Task added successfully' });
    });
  });
  
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM todos WHERE id = ?';
  
    connection.query(query, [id], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error deleting task' });
        return;
      }
  
      res.json({ message: 'Task deleted successfully' });
    });
  });
  
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });


function deleteTask(id) {
    fetch(`/tasks/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(data => {
        if (data.message === 'Task deleted successfully') {
          loadTasks(); // Reload tasks after deletion
        }
      });
  }
  