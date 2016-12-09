module.exports = function(app){

app.get('/v1/grupos', app.api.grupo.lista);

};