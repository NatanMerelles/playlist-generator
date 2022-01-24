const Base = require('../base');

class User extends Base {
  constructor({ id, name, age }) {
    super({ id, name });

    this.age = age;
  }
}

module.exports = User;