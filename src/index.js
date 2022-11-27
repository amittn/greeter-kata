
const capitalize = require('capitalize');
const Moment = require('moment-timezone');
const SIX = {hour: 6, minute: 0};
const TWELVE = {hour: 12, minute: 0};
const EIGHTEEN = {hour: 18, minute: 0};
const TWENTY_TWO = {hour: 22, minute: 0};

class Greeter {
  constructor() {
    this.todaysDt = new Moment();
    this.todaysDt.tz('Europe/London');
  }
  greet(name) {
    if (
      this.todaysDt.isSameOrAfter(new Moment().set(SIX)) &&
        this.todaysDt.isSameOrBefore(new Moment().set(TWELVE))
    ) {
      return `Good morning ${this.capitalizeFirstLetter(name)}`;
    } else if (
      this.todaysDt.isSameOrAfter(new Moment().set(EIGHTEEN)) &&
        this.todaysDt.isSameOrBefore(new Moment().set(TWENTY_TWO))
    ) {
      return `Good evening ${this.capitalizeFirstLetter(name)}`;
    } else if (
      this.todaysDt.isSameOrAfter(new Moment().set(TWENTY_TWO)) &&
        this.todaysDt.isSameOrBefore(new Moment().add(1, 'days').set(SIX))
    ) {
      return `Good night ${this.capitalizeFirstLetter(name)}`;
    }
    return `Hello ${this.capitalizeFirstLetter(name)}`;
  }

  capitalizeFirstLetter(name) {
    return `${capitalize(name.trim())}`;
  }
}

module.exports = {Greeter};
