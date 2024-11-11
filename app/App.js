import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { DollarController } from './controllers/DollarController.js';
import { SnacksController } from "./controllers/SnacksController.js";
const USE_ROUTER = false

class App {

  DollarController = new DollarController()
  SnacksController = new SnacksController()


  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app
