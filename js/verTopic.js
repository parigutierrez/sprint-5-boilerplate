var topicId = getParameterByName('topic_id');
//console.log(topicId);
var api= {url:'http://examen-laboratoria-sprint-5.herokuapp.com/topics'+topicId};
$.getJSON(api.url,function(response){
	console.log(response);
});

//Solo por propositos de debug
if(topicId){
 
}
