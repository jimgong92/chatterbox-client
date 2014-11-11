// YOUR CODE HERE:
$(document).ready(function() {
  var retrieve = function() {
    $.ajax({
      type: "GET",
      data:'order=-createdAt',
      success: function(json) {
        var arr = json.results;
        $('li').remove();
        _.each(arr, function(item) {
          var $res = $('<li></li>');
          $res.text(item.username + ": " + item.text);
          $('#messages').append($res);
        });
      },
      error: function() {
        console.log("!!!");
      }
    });
  };

  var send = function(data) {
    $.ajax({
      type: "POST",
      data: data,
      contentType: 'application/json'
    });
  };

  setInterval(retrieve, 1000);

  var userName = window.location.search.substring(window.location.search.indexOf("=") + 1);

  $('#submitButton').on('click', function(){
    //calculate data to transmit
    console.log($('#input').val() );
    var data = JSON.stringify({
      'username': userName,
      'text' : $('#input').val()
    });
    console.log("!!");
    send(data);
    $('#input').val("");

    // var $newPost = $('<li></li>');
    // var $text = $('#input').text();
    // $newPost.text(userName + ": " + $text);
    // $('#messages').prepend($newPost);
  });

});
