import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HousesService {
  createHouse(newHouse) {
    console.log(newHouse)
    let house = new House(newHouse.img, newHouse.title, newHouse.rentorsale, newHouse.price, newHouse.description, newHouse.address)
    ProxyState.houses = [...ProxyState.houses, house]
  }

  deleteHouse(id) {
    // find the Car
    let house = ProxyState.houses.find(house => house.id === id)
    // make the changes

    // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
    ProxyState.houses = houses.filter(house => house.id != house)
  }
  contact(id) {
    // find the Car
    let car = ProxyState.cars.find(car => car.id === id)
    // make the change
    car.price += 100

    // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
    ProxyState.houses = ProxyState.houses
  }
}

export const housesService = new HousesService();

