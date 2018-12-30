import Building from './Building'

let id = 0

export default class Person {
    constructor(name, age, place) {
        this.id = ++id
        this.name = name
        this.age = age
        this.sleep = true
        this.setPlace(place, true)
    }
    setPlace(place = null, creating = false) {
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
        if(creating === false) {
            console.log(this.name + ' moved to ' + this.place.address)
        }
    }
    wakeUp() {
        this.sleep = false
        console.log(this.name + ' waked up')
    }
}
