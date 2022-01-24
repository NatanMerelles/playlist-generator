const BaseRepository = require('../../repository/base/baseRepository');

class MusicService {
  constructor({ musics }) {
    this.musics = new BaseRepository({ file: musics });
  }

  async like({ musicId, age }) {
    if (age < 18) {
      throw new Error('User is under age');
    }
    const music = await this.getMusicById(musicId);

    return music.likes + 1;
  }

  async getMusicById(musicId) {
    return await this.musics.find(musicId);
  }
}

module.exports = MusicService;