
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
    console.log(`-------todayDt-${this.todaysDt}`);

    if (
      this.todaysDt.isSameOrAfter(new Moment().set(TWENTY_TWO)) ||
      this.todaysDt.isBefore(new Moment().set(SIX))
    ) {
      return `Good night ${this.capitalizeFirstLetter(name)}`;
    } else if (
      this.todaysDt.isSameOrAfter(new Moment().set(EIGHTEEN))
    ) {
      return `Good evening ${this.capitalizeFirstLetter(name)}`;
    } else if (
      this.todaysDt.isSameOrBefore(new Moment().set(TWELVE))
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
