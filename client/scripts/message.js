$(document).ready(function() {
  var MessageModel = Backbone.Model.extend({
    initialize : function(messageObject) {
      this.set('username', messageObject.username);
      this.set('message', messageObject.text);
      this.set('room', messageObject.roomname);
      this.set('timeStamp', messageObject.createdAt);
    }

  });
  var MessageCollection = Backbone.Collection.extend({
    model: MessageModel,
    update: function(json){
      this.reset();
      for (var i = 0; i < json.length; i++) {
        this.add(new MessageModel(json[i]));
      }
    }
  });
  //for collection
  var MessagesView = Backbone.View.extend({
    initialize: function() {
      this.model.on('change', function(e) {
        this.render();
      });
    },
    events: {
      "click .username" : //bold username
    },
    render: function() {

    }
  });
});


//Rooms list
//  lobby -> []
//  kdsjl -> []
//  fun room -> []

//Rooms list
//  lobby
//  kdsjl
//  fun room

//messageCollection
//  messageCollection.setFilter('roomFilter', 'lobby')
//  messageCollection.render ->
//    loop over all messages
//    only render messages who's roomname === roomFilter
