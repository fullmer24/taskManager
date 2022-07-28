import { ProxyState } from "../AppState.js";
import { tasks } from "../Models/Tasks.js";
import { tasksService } from "../Services/TasksService.js"


export class tasksController {
    constructor() {
        console.log("controller");
    }
}

function _drawTask() {
    // debugger
    let template = ''
    let task = ProxyState.task
    task.forEach(t => template += t.Template);
    // @ts-ignore
    document.getElementById('task').innerHTML = template
    console.log(template);
}
_drawTask()