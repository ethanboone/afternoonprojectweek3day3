import { generateId } from "../Utils/GenerateId.js"

export default class Job {
    constructor(title, pay, employer, description) {
        this.title = title
        this.pay = pay
        this.employer = employer
        this.description = description
        this.id = generateId()
    }

    get Template() {

        return /*html*/`
        <div class="col-md-3 my-3">
      <div class="card shadow">
          <div class="card-body">
              <h4 class="card-title">${this.title} | ${this.pay} | ${this.employer}</h4>
              <p class="card-text">${this.description}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Contact</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')">Favorite</button>
          </div>
      </div>
    </div>
        `
    }
}