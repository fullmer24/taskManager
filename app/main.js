import { tasksController } from "./Controllers/TasksController.js";

class App {
  // valuesController = new ValuesController();
  TasksController = new tasksController
}

window["app"] = new App();
