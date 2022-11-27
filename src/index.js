
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
    let response;
    console.log(`todays date and time is:- ${this.todaysDt}`);
    this.validateName(name);
    if (
      this.todaysDt.isSameOrAfter(new Moment().set(TWENTY_TWO)) ||
      this.todaysDt.isBefore(new Moment().set(SIX))
    ) {
      response = `Good night ${this.capitalizeFirstLetter(name)}`;
    } else if (
      this.todaysDt.isSameOrAfter(new Moment().set(EIGHTEEN))
    ) {
      response = `Good evening ${this.capitalizeFirstLetter(name)}`;
    } else if (
      this.todaysDt.isSameOrBefore(new Moment().set(TWELVE))
    ) {
      response = `Good morning ${this.capitalizeFirstLetter(name)}`;
    } else {
      response = `Hello ${this.capitalizeFirstLetter(name)}`;
    }
    console.log(`${response}`);
    return response;
  }

  capitalizeFirstLetter(name) {
    return `${capitalize(name.trim())}`;
  }

  validateName(name) {
    if (!(name && name.trim())) {
      throw new Error(`name is a mandatory field`);
    }
  }
}

module.exports = {Greeter};
