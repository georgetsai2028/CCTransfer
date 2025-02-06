const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../config/database'); //imports database connection

const router = express.Router();

//Registration Route
router.post('/register', async (req, res) => {
    console.log("Incoming request body:", req.body); // Log req.bod

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
        
    try {
        console.log("recieve registration req");
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (password !== confirmPassword) {
            console.log("passwords dont match");
            return res.status(400).json({ error: "Passwords do not match" });
        }

        //hashes password before storing
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("password hashed successfully");

        //inserts users from form into database
        const sql = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
        const [result] = await pool.query(sql, [username, email, hashedPassword]);

        console.log("user inserted in database with ID: ", result.insertId);
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId});

    } catch (error) {
        console.error('Error registering user: Womp ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;