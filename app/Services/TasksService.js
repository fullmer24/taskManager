import { ProxyState } from "../AppState.js";
import { tasks } from "../Models/Tasks.js";

class TasksService {
    createTask(newTask) {
        ProxyState.task = [...ProxyState.tasks, new TasksService(newTask)]
    }
}


export const tasksService = new TasksService();