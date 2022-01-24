const Base = require('../base');

class Playlist extends Base {
  constructor({ id, name, genre, userId, musicIds }) {
    super({ id, name });

    this.genre = genre;
    this.musicIds = musicIds;
  }
}

module.exports = Playlist;