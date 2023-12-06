const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');

    db.query('CREATE DATABASE IF NOT EXISTS quiz_app', (err, result) => {
        if (err) throw err;
        console.log('quiz_app database created or already exists');
        
        db.query('USE quiz_app', (err, result) => {
            if (err) throw err;
            console.log('Using quiz_app database');
            
            const createUserAnswersTable = `
                CREATE TABLE IF NOT EXISTS user_answers (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(255) NOT NULL,
                    answer VARCHAR(1) NOT NULL
                )
            `;
            
            db.query(createUserAnswersTable, (err, result) => {
                if (err) throw err;
                console.log('user_answers table created or already exists');
                
                // Close the connection after the table is created
                db.end((err) => {
                    if (err) throw err;
                    console.log('MySQL connection closed');
                });
            });
        });
    });
});
