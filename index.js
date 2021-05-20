const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const path = require('path');


var app = express();
var config = require(__dirname + '/config');

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // cors
// app.use(cors());
// app.options('', cors());
// app.use(function(req, res, next) { //allow cross origin requests
//     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Allow-Origin", "");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

/* SERVER BUILD UP*/
app.get('/api/health', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Server is listening on port ' + config.http.port
    });
});

// Server Routes
const routes = require('./server/router');
app.use('/api', routes);

app.use(function (req, res) {
    console.log('404')
});

mongoose.connect(config.mongodb.url).then(() => {
    app.listen(config.http.port, function (err) {
        console.log('Database connection is established successfully.');
        if (err) console.log(err);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})