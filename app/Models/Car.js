import { generateId } from "../Utils/GenerateId.js"

export default class Car {
    constructor(img, make, model, year, price, description) {
        this.img = img
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.id = generateId()
    }

    // NOTE 'get' signifies a FAKE property
    // GETters MUST return a value
    get Template() {
        return `
    <div class="col-md-3 my-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.make} | ${this.model} | ${this.year}</h4>
              <p class="card-text">${this.description} - $${this.price}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
    }
}