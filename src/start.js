import Person from './classes/Person'
import Building from './classes/Building'

export default () => {
    let rudneva = new Building('Rudneva 5')
    let kirova = new Building('Kirova 101')
    let office = new Building('Volzskaya 1d')

    let vlad = new Person('Vladislav', 25, kirova) 
    let roma = new Person('Roman', 21, rudneva)
    
    roma.wakeUp()
    vlad.setPlace(office)
    console.log("Program started")
}
