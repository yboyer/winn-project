/* eslint no-extend-native: ["error", { "exceptions": ["Date", "Number"] }]*/
Date.prototype.toDDMMYYHHMM = function () {
  const day = this.getDate().twoDigits();
  const month = (this.getMonth() + 1).twoDigits();
  const year = this.getFullYear().twoDigits();

  const date = `${day}/${month}/${year}`;
  const time = `${this.getHours().twoDigits()}:${this.getMinutes().twoDigits()}`;
  return `${date} at ${time}`;
};

Number.prototype.twoDigits = function () {
  if (this > 9) {
    return this;
  }
  return (`0${this}`);
};
