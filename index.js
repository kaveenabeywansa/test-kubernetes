var express = require('express');
var app = express();
const Routes = require('./routes');

app.use('/', Routes);
app.listen(3000, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Server running on port: 3000');
});
module.exports = app;