// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('library', params.library);

    this.get('library').on('enqueue', function (song){
      this.get('songQueue').enqueue(song);
    }, this);

    this.get('songQueue').on('play', function (song) {
      this.set('currentSong', song);
    }, this);
  }
});
