const Base = require('../base');

class Music extends Base {
  constructor({ id, name, genre, likes, author, explicit }) {
    super({ id, name });

    this.genre = genre;
    this.likes = likes;
    this.author = author;
    this.explicit = explicit;
  }
}

module.exports = Music;