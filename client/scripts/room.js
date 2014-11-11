$(document).ready(function() {
  var RoomModel = Backbone.Model.extend({
    initialize: function(roomname) {
      this.set('roomname', roomname);
    }
  });
  var RoomCollection = Backbone.Collection.extend( {
    model: RoomModel,
    update: function(json) {
      this.reset();
      var roomList = json.map(function(item) {
        return item.roomname;
      });
      roomList = _.uniq(roomList);
      for (var i = 0; i < roomList.length; i++) {
        this.add(new RoomModel(roomList[i]));
      }
    }
  });
  //for collection
  var RoomsView = Backbone.View.extend( {
    initialize: function() {
      this.model.on('change', function(e) {
        this.render();
      });
    },
    events: {
      "click .room" : //change currentRoom
    },
    render: function() {

    }
  });
});
