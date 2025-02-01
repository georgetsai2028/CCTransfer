CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (email, username, password_hash)
VALUES (
        'hello@world.com',
        'pukaaa',
        'puka123'
    );
SELECT id,
    email,
    username
FROM users
ORDER BY id DESC
LIMIT 3;
INSERT INTO users (email, username, password_hash)
VALUES(
        'whoisthis@gmail.com',
        'whoisthis',
        'whoisthis123'
    );
CREATE INDEX email_index ON users(email);
SELECT *
FROM users;