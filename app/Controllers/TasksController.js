import { ProxyState } from "../AppState.js";
import { tasks } from "../Models/Tasks.js";
import { tasksService } from "../Services/TasksService.js"


export class tasksController {
    constructor() {
        console.log("controller");
    }
    createTask() {
        window.event.preventDefault()
        let form = window.event.target
        console.log('creating task');
        let newTask = {
            task: form.task.value
        }

    }


}

function _drawTask() {
    // debugger
    let template = ''
    let task = ProxyState.task
    task.forEach(t => template += t.Template);
    // @ts-ignore
    document.getElementById('task').innerHTML = template
    // console.log(template);
}
_drawTask()