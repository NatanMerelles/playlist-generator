const BaseRepository = require('../../repository/base/baseRepository');

class MusicService {
  constructor({ musics }) {
    this.musics = new BaseRepository({ file: musics });
  }

  async like({ musicId, age }) {
    const music = await this.getMusicById(musicId);

    if (age < 18 && music.explicit) {
      throw new Error('User is under age');
    }

    return music.likes + 1;
  }

  async getMusicById(musicId) {
    return await this.musics.find(musicId);
  }
}

module.exports = MusicService;