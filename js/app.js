$(document).foundation();

$.ajax({
  url: 'https://api.instagram.com/v1/users/1721552028/media/recent?access_token=1721552028.5b9e1e6.1ef4cc17d83a4c14990feaffc31b5b90',
  type: 'GET',
  data: {
    format: 'json'
  },
  error: function(){
    alert('An error has occurred');
  },
  success: function(results){
  	for(i=0;i<states.length;i++){
  		console.log(results.data[i]);
  		var post = results.data[i];
  		var text = 
  		$('#instagram ul').append("<li>"+post+"<p>"+"</li>");

    }
  }
});
