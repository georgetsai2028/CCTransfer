const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
//set the view folder where ejs is stored
app.set('views', path.join(__dirname, 'views'));
//serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//route for homepage
app.get('/homePage', (req, res) => {
    res.render('/homePage/homePage.ejs')
})

//route for schools page
app.get('/schools', (req, res) => {
    res.render('schools')
})

app.listen(3000);