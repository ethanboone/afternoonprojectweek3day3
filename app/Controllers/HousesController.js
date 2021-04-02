import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
  let houses = ProxyState.houses;
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
    ProxyState.on("houses", _draw);
    _draw()
  }

  createHouse() {
    console.log('controller')
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    let newHouse = {
      // @ts-ignore
      img: form.img.value,
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      rentorsale: form.rentorsale.value,
      // @ts-ignore
      price: Number(form.price.value),
      // @ts-ignore  this converts the string to a number
      description: form.description.value,
      // @ts-ignore
      address: form.address.value
    }
    housesService.createHouse(newHouse)

    // @ts-ignore
    form.reset()

    // get the modal and close (using jQuery's "$" selector) 
    $('#new-house-form').modal('hide')
  }

  deleteHouse() {
    housesService.deleteHouse(id)
  }

  contact(id) {
    housesService.contact(id)
  }

}
