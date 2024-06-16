require('dotenv').config();

const port = process.env.PORT || 8081;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = new express();

//Routes
const apiRoutes = require('./api/routes/routes');
// MIDDLESWARES
const authMiddleware = require('./middlewares/auth.middleware');

// API
const apiUserRoute = require('./api/routes/routes');

app.use('/static', express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.CookieID));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Ductn'
    });
});

// use ROUTES
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});