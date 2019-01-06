import Person from './classes/Person'
import Building from './classes/Building'
import Timer from './classes/Timer'
import Logger from './classes/Logger'

export default () => {
    let timer = new Timer()
    let logger = new Logger(timer)

    let rudneva = new Building('Rudneva 5')
    let kirova = new Building('Kirova 101')
    let office = new Building('Volzskaya 1d')

    let vlad = new Person('Vladislav', 25, kirova, logger) 
    let roma = new Person('Roman', 21, rudneva, logger)

    
    timer.on('10:00', () => roma.wakeUp())
    timer.on('12:00', () => vlad.wakeUp())
    
    timer.on('12:30', () => {
        roma.setPlace(office)
    })
    timer.on('12:40', () => {
        vlad.setPlace(office)
    })

    timer.on('00:00', () => timer.stop())

    timer.start()

    console.log("Program started")
}
