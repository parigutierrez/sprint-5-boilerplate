var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

$('.modal').modal();

var $temas = $("#temas");

var cargarPagina = function(){
	cargarTopics();
	$("#add-form").submit(agregarTopic);

};

var cargarTopics = function () {
  $.getJSON(api.url, function (topics) {
    topics.forEach(crearTopic);
    //console.log(topics);
  });
}


var crearTopic = function (topic) {
  var contenido = topic.content;
  var autor = topic.author_name;
  var id = topic.id;
  var responses = topic.responses_count;
  var plantillaNueva = plantilla.replace("__content__",contenido).replace("__autor__",autor).replace("__respuestas__",responses).replace("__id__",id);
  $temas.append(plantillaNueva);

};

var agregarTopic = function (e) {
  e.preventDefault();
  var autor = $("#autor").val();
  $.post(api.url, {
    content: content
  }, function (topic) {
    crearTopic(topic);
    $("#temas").modal("hide");
  });
};

var plantilla = '<tr data-clave="__id__">' +
                    '<td>__content__</td>' + 
                    '<td>__autor__</td>' +
                   	'<td>__respuestas__</td>' +
                 '</tr>';












$(document).ready(cargarPagina);