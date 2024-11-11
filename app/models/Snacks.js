
export class Snacks {
  constructor(data) {
    this.name = data.name
    this.price = data.price

  }

  littleCard() {
    return `
  <div class="col-md-4">
    <div class="border border-1 border-dark p-2 bg-light">
      <div class="text-end">
        <span class="fw-bold">Egg Rolls</span>
      </div>
      <hr>
      <div class="text-center">
      <span class="display-1">3.00</span>
      </div>
    </div>
  </div>`
  }


}

