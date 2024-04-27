const express = require('express');
var Routes = express.Router();


Routes.use('/main', function (req, res) {
    res.send('Welcome to Main Route!');
});

Routes.use('/test', function (req, res) {
    res.send('Welcome to Test Route!');
});

module.exports = Routes;