export default class Logger {
  constructor(timer) {
    this.timer = timer
  }
  log(message = '') {
    console.log(message + ' at ' + this.timer.getTime())
  }
}
