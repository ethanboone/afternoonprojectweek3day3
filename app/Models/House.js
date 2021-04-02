import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor(img, title, rentorsale, price, description, address) {
        this.img = img
        this.title = title
        this.rentorsale = rentorsale
        this.price = price
        this.description = description
        this.address = address
        this.id = generateId()
    }

    get Template() {

        return /*html*/`
        <div class="col-md-3 my-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.title} | For ${this.rentorsale} | $${this.price}</h4>
              <p class="card-text">${this.description} | ${this.address}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.contact('${this.id}')">Contact</button>
          </div>
      </div>
    </div>
        `
    }
}
