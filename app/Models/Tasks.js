


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
      </div>
    </div>
        `
    }
}
