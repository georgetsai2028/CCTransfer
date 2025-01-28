const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
//set the view folder where ejs is stored
app.set('views', path.join(__dirname, 'views'));
//serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));


//route for homepage
app.get('/homePage', (req, res) => {
    res.render('homePage/homePage')
})

//route for schools page
app.get('/schoolsPage', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'json','schools.json'), 'utf-8', (err, data) => {
        if (err) {
            console.log("Error reading JSON file", err.message);
            return res.status(500).send("Error reading schools data")
        }

        const schoolData = JSON.parse(data);
        res.render('schoolsPage/schools', {schools: schoolData});
    });
    
});

//route for login page
app.get('/loginPage', (req, res) => {
    res.render('loginPage/loginPage')
})


app.listen(3000);