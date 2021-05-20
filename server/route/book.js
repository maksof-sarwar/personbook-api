var express = require('express');
var route = express.Router();

const book = require('../controller/book')
var router =()=>{
    route.get('/detail', book.viewBook);
    route.post('/insert', book.insertBook);
    route.get('/id/:pId', book.findBookByPersonId)
    route.get('/pNo/:pNo', book.findBookbyPhoneNo)
    return route;
}

module.exports = router; 