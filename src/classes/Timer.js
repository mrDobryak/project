import moment from 'moment'

export default class Timer {
    constructor() {
        this.date = moment().hour(8).minute(0)
    }
    start() {
        this.interval = setInterval(() => {
            this.date.add(1, 'minute')
            console.log(this.date.format('HH:mm'))
        }, 1000)
    }
    stop() {
        clearInterval(this.interval)
    }    
}