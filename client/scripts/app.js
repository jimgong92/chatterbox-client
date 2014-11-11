// YOUR CODE HERE:
$(document).ready(function() {
  var retrieve = function() {
    $.ajax({
      type: "GET",
      data:'order=-createdAt',
      success: function(json) {
        var arr = json.results;
        $('.message').remove();
        $('.room').remove();
        //clear rooms
        rooms = {};
        _.each(arr, function(item) {
          //re-create rooms object
          if (!rooms[item.roomname]) {
            rooms[item.roomname] = [];
          }
          rooms[item.roomname].push(item);
          // displayMessage(item);
        });

        //display the messages in the room we're currently in
        _.each(rooms[currentRoom], function(item) {
          displayMessage(item);
        });
        for (var room in rooms) {
          displayRoom(room);
        }
      },
      error: function() {
        console.log("!!!");
      }
    });
  };

  var displayMessage = function(message) {
    var $res = $('<li class="message"></li>');
    $res.text(message.username + ": " + message.text);
    $('#messages').append($res);
  };
  var displayRoom = function(room) {
    var $res = $('<li class="room"></li>');
    $res.text(room);
    $('#roomList').append($res);
  }
  var send = function() {
    var data = JSON.stringify({
      'username': userName,
      'text' : $('#input').val(),
      'roomname': 'lobby'
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
  var rooms = {};
  var currentRoom = 'lobby';

  $('#submitButton').on('click', send);

  $('#input').keypress(function(e) {
    if (e.which === 13 && $("#input").is(":focus")) {
      send();
    }
  });

  $('#roomList').on('click', '.room', function() {
    currentRoom = $(this).text();
    console.log(currentRoom);
  })

});
