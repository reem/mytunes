// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function () {
    // Listen for enqueue events, handle them.
    this.on('ended', function (song) {
      this.dequeue();
      if (this.length)
        this.playFirst();
    });

    this.on('dequeue', function (song) {
      this.remove(song);
    });
  },  

  enqueue: function (song) {
    this.push(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function () {
    this.at(0).set('numPlays', this.at(0).get('numPlays') + 1);
    this.at(0).play();
  },

  dequeue: function () {
    this.shift();
  }
});
