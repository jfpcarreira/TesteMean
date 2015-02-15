// Dependencies
var express             = require('express'),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose');

// Mongo DB
mongoose.connect('mongodb://localhost:27017/mean-demo');

// Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/client/views/index.html')
});

app.use('/api', require('./server/routes/api'));

app.use('/js', express.static(__dirname + '/client/js'));

// Star server
app.listen(3000, function() {
	console.log('Aplicacao a escuta na porta 3000');
});
