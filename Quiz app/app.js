const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'quiz_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { username, answer } = req.body;
    const sql = 'INSERT INTO user_answers (username, answer) VALUES (?, ?)';
    db.query(sql, [username, answer], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
