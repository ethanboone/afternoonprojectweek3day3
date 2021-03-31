import House from "./Models/House.js"
import Car from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Job from "./Models/Job.js"

class AppState extends EventEmitter {
  /** @type {House[]} */
  cars = [new Car('//placehold.it/200x200', 'Ford', 'GT', '2018', 125000, 'Great Condition, well cared for'),
  new Car('//placehold.it/200x200', 'Ford', 'GT', '2018', 125000, 'Great Condition, well cared for'),
  new Car('//placehold.it/200x200', 'Ford', 'GT', '2018', 125000, 'Great Condition, well cared for')
  ]
  houses = [new House('//placehold.it/200x200', '3br House', 'Sale', 344000, 'Quiet neighborhood 2 miles from downtown!', '123 Main St'),
  new House('//placehold.it/200x200', '2 Bedroom Apartment', 'Rent', 1200, 'Great Location in downtown', '123 North Rd'),
  new House('//placehold.it/200x200', '5 Bed 3 bath House', 'Sale', 850000, 'Outside of town with 5 acre lot', '321 E Country Ln')]
  jobs = [new Job('Construction', '$14 an hour', 'BlueColler Construction', 'call (123)456-7890 for more information'),
  new Job('Delivery Driver', '$12 Hourly + Tips', 'Pizza Planet', 'Come to our location at 123 N Road and ask the manager for an application!')
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
