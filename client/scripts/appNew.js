var messageCollection = new MessageCollection();
var roomCollection = new RoomCollection();
var messagesView = new MessagesView({model: messageCollection});
var roomsView = new RoomsView({model: roomCollection});

$(document).ready(function() {
  var retrieve = function() {
    $.ajax({
      type: "GET",
      data:'order=-createdAt&limit=1000',
      success:
    });
  };

  var success = function(json) {
    var arr = json.results;
    messageCollection.update(arr);
    roomCollection.update(arr);
  }
});
