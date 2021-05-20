var Sequelize = require('sequelize');
// var config = require( __dirname + '/../config' );

if(true) {
    var sequelize = new Sequelize("imran", "root", "", {
        host: "127.0.0.1",
        port: "3306",
        dialect: 'mariadb',
        dialectOptions: {
            timeout: 3000
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });
    module.exports.sequelizeConfig = sequelize;
}
