var express = require('express');
var route = express.Router();

const person = require('../controller/person')
var router =()=>{
    route.get('/detail', person.viewPerson);
    route.get('/:id', person.findPersonById);
    route.post('/insert', person.insertPerson);
    route.get('/del/:id', person.deletePerson);
    return route;
}

module.exports = router; 