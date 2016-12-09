module.exports = function(app){

app.get('/v1/fotos', app.api.foto.lista);

};