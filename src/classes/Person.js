import Building from './Building'

let id = 0

export default class Person {
    constructor(name, age, place, logger) {
        this.id = ++id
        this.name = name
        this.age = age
        this.logger = logger
        this.isSleep = true
        this.setPlace(place, true)
    }
    setPlace(place = null, isCreating = false) {
        if(!(place instanceof Building) && place != null) {
            console.error('Place "' + place + '" is not a building')
            return false
        }
        if(this.place != null) {
            this.place.removePerson(this)
        }
        this.place = place
        if(this.place != null) {
            this.place.addPerson(this)
        }
        if(!isCreating) {
            this.log('moved to ' + this.place.address)
        }
    }
    wakeUp() {
        this.isSleep = false
        this.log('waked up')
    }
    log(str) {
        this.logger.log(this.name + ' ' + str)
    }
}
