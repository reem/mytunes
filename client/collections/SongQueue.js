// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function () {
    // Listen for enqueue events, handle them.
    this.on('end', function (song) {
      song.dequeue();
      if (this.length)
        this.playFirst();
    });
  },  

  enqueue: function (song) {
    this.push(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function () {
    console.log("called");
    this.at(0).play();
  },

  dequeue: function () {
    this.shift();
  }
});
