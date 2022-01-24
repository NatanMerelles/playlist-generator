const faker = require('faker');
const Playlist = require('../src/entities/playlist');
const Music = require('../src/entities/music');
const User = require('../src/entities/user');

const { join } = require('path');
const { writeFile } = require('fs/promises');

const seederBaseFolder = join(__dirname, '../', 'database');
const ITEMS_AMOUNT = {
  users: 5,
  music: 10
}

const playlist = new Playlist({
  id: faker.datatype.uuid(),
  name: faker.lorem.words(3),
  genre: faker.music.genre(),
  musicIds: []
});

const users = [];
const musics = [];

for (let i = 0; i <= ITEMS_AMOUNT.users; i++) {
  const user = new User({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    age: faker.datatype.number({ min: 10, max: 50 })
  });

  users.push(user);
}

for (let i = 0; i <= ITEMS_AMOUNT.music; i++) {
  const music = new Music({
    id: faker.datatype.uuid(),
    name: faker.lorem.words(3),
    genre: faker.music.genre(),
    author: faker.name.findName(),
    likes: faker.datatype.number(),
    explicit: faker.datatype.boolean()
  });

  musics.push(music);
}

console.log({ playlist, users, musics })

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

(async () => {
  await write('playlists.json', [playlist]);
  await write('users.json', users);
  await write('musics.json', musics);
})();
