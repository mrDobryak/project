import moment from 'moment'

export default class Timer {
    constructor() {
        this.date = moment().hour(8).minute(0)
        this.callbacks = []
    }
    start() {
        this.interval = setInterval(() => {
            this.date.add(1, 'minute')
            this.tick()
        }, 30)
    }
    stop() {
        clearInterval(this.interval)
    }
    on(time, func) {
        this.callbacks.push({
            time: time,
            func: func
        })
    }
    tick() {
        let time = this.date.format('HH:mm')
        this.callbacks.forEach((callback) => {
            if (callback.time === time) {
                callback.func()
            }
        })
    }
}