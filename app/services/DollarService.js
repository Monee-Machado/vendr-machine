import { AppState } from "../AppState.js";



class DollarService {
  addDollar() {
    // console.log('Adding dollar!');
    AppState.dollars++
    console.log('Dollars are ' + AppState.dollars)
  }
}


// NOTE keep in mind the SINGLETON design pattern (EXACTLY one dollarService will ever exist!)

export const dollarService = new DollarService()