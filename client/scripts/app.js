// YOUR CODE HERE:
var serverURL = "https://api.parse.com/1/classes/chatterbox";

$.ajax({
  url: serverURL,
  type: "GET",
  success: function(json) {
    var arr = json.results;
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
