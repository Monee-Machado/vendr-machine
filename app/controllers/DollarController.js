import { AppState } from "../AppState.js";
import { dollarService } from "../services/DollarService.js";


export class DollarController {
  constructor() {
    console.log('Dollar Controller Loaded!')
  }
  addDollar() {
    console.log('Adding dollar!');
    dollarService.addDollar()
    this.drawDollars()
  }

  drawDollars() {
    const dollarElem =
      document.getElementById('dollar-count')
    dollarElem.innerText =
      AppState.dollars.toString()
  }

}


