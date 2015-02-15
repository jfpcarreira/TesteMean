// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

var pessoaSchema = new mongoose.Schema({
    nome : String,
    apelido : String,
    idade : Number
});

module.exports = restful.model('Pessoas', pessoaSchema);
