
const capitalize = require('capitalize');
const Moment = require('moment-timezone');

class Greeter {
  constructor() {
    this.todaysDt = new Moment();
    this.todaysDt.tz('Europe/London');
  }
  greet(name) {
    if (
      this.todaysDt.isSameOrAfter(new Moment(this.todaysDt)
          .set('hour', '06').set('minute', '00')) &&
        this.todaysDt.isSameOrBefore(new Moment(this.todaysDt)
            .set('hour', '12').set('minute', '00'))
    ) {
      return `Good morning ${this.capitalizeFirstLetter(name)}`;
    }
    return `Hello ${this.capitalizeFirstLetter(name)}`;
  }

  capitalizeFirstLetter(name) {
    return `${capitalize(name.trim())}`;
  }
}

module.exports = {Greeter};
