CREATE DATABASE quiz_app;

USE quiz_app;

CREATE TABLE user_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    answer VARCHAR(1) NOT NULL
);
;
SELECT * FROM quiz_app.user_answers;