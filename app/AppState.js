import { Snacks } from "./models/Snacks.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  dollars = 0
  snacks = [
    new Snacks({
      name: 'Egg Rolls',
      price: '3.00'
    }),
    new Snacks({
      name: 'Udon Noodles',
      price: '6.00'
    }),
    new Snacks({
      name: 'Yuzu Fruit',
      price: '2.00'
    }),

  ]

}

export const AppState = createObservableProxy(new ObservableAppState())