import moment from 'moment'

const SPEED_DEFAULT = 30

export default class Timer {
    constructor(speed = SPEED_DEFAULT) {
        this.date = moment().hour(8).minute(0)
        this.callbacks = []
        this.speed = speed
    }
    start() {
        this.interval = setInterval(() => {
            this.date.add(1, 'minute')
            this.tick()
        }, this.speed)
    }
    stop() {
        clearInterval(this.interval)
    }
    on(time, func) {
        this.callbacks.push({ time, func })
    }
    tick() {
        let time = this.date.format('HH:mm')
        this.callbacks.forEach((callback) => {
            if (callback.time === time) {
                callback.func()
            }
        })
    }
    getTime() {
        return this.date.format('HH:mm')
    }
}