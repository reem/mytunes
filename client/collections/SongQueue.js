// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function () {
    // Listen for enqueue events, handle them.
    this.on('end', function () {
      this.shift();
      if (this.length) {
        this.at(0).play();
      }
    });
  },  

  enqueue: function (song) {
    this.push(song);
    if (this.length === 1) {
      song.play();
    }
  }
});
