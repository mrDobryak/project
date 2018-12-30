let id = 0 

export default class Building {
    constructor(address) {
        this.id = ++id
        this.address = address
        this.people = []
    }
    addPerson(person) {
        this.people.push(person)
    }
    removePerson(person) {
        this.people = this.people.filter((p) => p.id !== person.id)
    }

}