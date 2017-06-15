var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

$('.modal').modal();

var $temas = $("#temas");

var cargarPagina = function(){
	cargarTopics();
	$("#guardar").click(agregarTopic);

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

/*var respuestas = topic.responses_count;
 if(typeof(respuestas) == "undefined"){
  	respuestas="0";
  }*/

var agregarTopic = function (e) {
  e.preventDefault();
  var autor = $("#autor").val();
  var mensaje = $("#mensaje").val();
  
  $.post(api.url, {
  	author_name	: autor,
  	content	: mensaje,
  }, 
 
  function (topic) {
    crearTopic(topic);
    //$("#crear").modal("hide");
  });
};

var plantilla = '<tr data-clave="__id__">' +
                    '<td>__content__</td>' + 
                    '<td>__autor__</td>' +
                   	'<td>__respuestas__</td>' +
                 '</tr>';


$(document).ready(cargarPagina);