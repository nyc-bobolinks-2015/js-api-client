function loadFromReddit() {
  var dfd = $.get('http://api.reddit.com')
  .then(function(response){
    return response.data.children;
  });
  return dfd;
}

$(document).ready(function(){
  
  $('#load-button').on('click', function(event) {
    loadFromReddit().then(function(data){
       var source = $("#reddit-item").html();
       var template = Handlebars.compile(source);
       var output = template({items: data});
       $('#reddit-content').html(output);
    });
  });

});