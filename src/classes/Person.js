import Building from './Building'

let id = 0

export default class Person {
    constructor(name, age, place) {
        this.id = ++id
        this.name = name
        this.age = age
        this.setPlace(place)
    }
    setPlace(place = null) {
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
    }
}
