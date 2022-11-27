const capitalize = require('capitalize');
class Greeter {
  greet(name) {
    return `Hello ${capitalize(name.trim())}`;
  }
}

module.exports = {Greeter};
