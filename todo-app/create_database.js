const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL');

  // Create the database
  connection.query('CREATE DATABASE IF NOT EXISTS todo_db', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }

    console.log('Database created or already exists');

    // Use the database
    connection.query('USE todo_db', (err) => {
      if (err) {
        console.error('Error using database:', err);
        return;
      }

      console.log('Using database todo_db');

      // Create the table
      connection.query('CREATE TABLE IF NOT EXISTS todos (id INT AUTO_INCREMENT PRIMARY KEY, task VARCHAR(255) NOT NULL)', (err) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }

        console.log('Table created or already exists');

        // Close the connection
        connection.end((err) => {
          if (err) {
            console.error('Error closing connection:', err);
            return;
          }

          console.log('Connection closed');
        });
      });
    });
  });
});
