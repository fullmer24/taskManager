


export class tasks {
    constructor({ title, task }) {
        this.title = title
        this.task = task
    }
    get Template() {
        return `
    <div class="col-4 elevation-2 p-2">
      <div>
        <h2>${this.title}</h2>
        <p>${this.task}</p>
        <form onsubmit="app.TasksController._drawtask()">
              <label class="form-control" for="task"></label>
              <input class="form-control" type="text" id="taskForm">
              <button type="submit" onclick="app.TasksController.createTask()" class="btn btn-primary">submit</button>
            </form>
      </div>
    </div>
        `
    }
}
