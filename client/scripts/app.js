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

  var send = function() {
    var data = JSON.stringify({
      'username': userName,
      'text' : $('#input').val()
    });

    $.ajax({
      type: "POST",
      data: data,
      contentType: 'application/json'
    });
    $('#input').val("");
  };

  setInterval(retrieve, 1000);

  var userName = window.location.search.substring(window.location.search.indexOf("=") + 1);

  $('#submitButton').on('click', send);

  $('#input').keypress(function(e) {
    if (e.which === 13 && $("#input").is(":focus")) {
      send();
    }
  });

});
