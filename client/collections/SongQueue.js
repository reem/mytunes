// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function () {
    // Listen for enqueue events, handle them.
    this.on('end', function () {
      this.shift();
      if (this.length) {
        this.trigger('newSong', this.at(0));
      }
    });
  },  

  enqueue: function (song) {
    this.push(song);
    if (this.length === 1) {
      this.trigger('newSong', song);
    }
  }
});
