const { describe, it, before, beforeEach, afterEach } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const expect = chai.expect;

const sinon = require('sinon');
const { join } = require('path');

const MusicService = require('../../../src/services/music');

const musicDatabase = join(__dirname, '../../../database', "musics.json");

const mocks = {
  music: require('./../../mocks/validMusic.json')
}

describe('MusicService Suite Testes', () => {
  let musicService = {}
  let sandbox = {}

  before(() => {
    musicService = new MusicService({
      musics: musicDatabase
    })
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should give error message case under age', () => {
    const age = 16;
    const music = Object.create(mocks.music);
    music.explicit = true;

    sandbox.stub(
      musicService,
      musicService.getMusicById.name
    ).returns(music);

    return expect(musicService.like({ age })).to.be.rejected;
  });

  it('should increase music likes amount', async () => {
    const age = 21;
    const music = Object.create(mocks.music);
    const expected = music.likes + 1;

    sandbox.stub(
      musicService,
      musicService.getMusicById.name
    ).returns(music);

    const result = await musicService.like({ age });

    return expect(result).to.be.equal(expected);
  });
});