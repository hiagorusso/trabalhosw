$('.mostrarPerson').on('click', function() {
	var idPer = $('#selecaoPerso').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/'+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:" + data.height + "<br/>Ano Nasc.: " + data.birth_year + "<br/>Genero: " + data.gender + "<br/>";
}});
});





$('.mostrarPlanets').on('click', function() {
	var idPer = $('#selecaoPlaneta').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/'+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPlanets");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Rotação:" + data.rotation_period + "<br/>Órbita.: " + data.orbital_period + "<br/>População: " + data.population + "<br/>";
}});
});








$('.mostrarStarship').on('click', function() {
	var idPer = $('#selecaoNaves').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/starships/'+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contStarship");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Modelo:" + data.model + "<br/>Fabricante.: " + data.manufacturer + "<br/>Comprimento: " + data.length + "<br/>Passageiros: " + data.passengers + "<br/>";;
}});
});










