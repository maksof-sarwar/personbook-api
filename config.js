 var config = {}

 // Application Information
 config.app = {}
 config.app.mode = {}
 config.app.mode.DEVELOPMENT = 'development';
 config.app.mode.PRODUCTION = 'production';
 config.app.mode.current = config.app.mode.DEVELOPMENT;
 
 // HTTP server configuration
 config.http = {}
 config.http.port = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 3000 : 3000;
 config.http.enableSSL = false;
 
 // Db Configuration
 config.mongodb= {}
 config.mongodb.url = "mongodb+srv://root:root@cluster0.grgit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//  config.db = {}
//  config.db.host = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 'SQL5104.site4now.net' : 'SQL5104.site4now.net'; 
//  config.db.username = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 'db_a74252_test_admin' : 'db_a74252_test_admin'; 
//  config.db.password = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 'test1234' : 'test1234'; 
//  config.db.database = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 'db_a74252_test' : 'db_a74252_test'; 
//  config.db.port = 1433;
//  config.db.dialect = 'mssql';
//  config.db.connect = true; 
 
 //JWT
 config.jwt = {};
 config.jwt.userExpiry = '86400';
 config.jwt.secret = 'y@ll@certify321';
 
 config.host = {}
 config.host.url = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 'http:localhost:4200/' : 'http://yc.maksof.com/';

 module.exports = config;