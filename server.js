var express = require ('express');
var app = express();

var VIEW_DIR = __dirname;

app.use( express.static( VIEW_DIR) );
app.set('port', process.env.port || 1800 );

app.listen(app.get('port'), function(){
	console.log('Server started: http://localhost:' + app.get('port') + '/');
})

app.get('/', function( req, res ){
	res.sendFile(VIEW_DIR + '/calendar.html');
})