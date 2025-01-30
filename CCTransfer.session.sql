CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    --unique id for each user
    email VARCHAR(255) NOT NULL UNIQUE,
    --unique email thats not null
    username VARCHAR(50) NOT NULL UNIQUE,
    -- unique username thats not null
    password_hash VARCHAR(255) NOT NULL,
    --hashed password use bcrypt first
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    --user timestamp creation
)