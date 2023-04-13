import { proxy } from "valtio";


let initTasks = [
    {
        name: "Task 1",
        description: "taskDescription",
        deadline: "0000-00-00",
        priority: "2",
        completed: false
    }
];

export const TaskStore = proxy({
    tasks: initTasks
});

export const addTask = (task) => {
    TaskStore.tasks.push(task);
    initTasks = TaskStore.tasks;
}

export const removeTask = (task) => {
    TaskStore.tasks.splice(TaskStore.tasks.indexOf(task), 1);
    initTasks = TaskStore.tasks;
}

export const updateTask = (actual, updated) => {
    TaskStore.tasks[TaskStore.tasks.indexOf(actual)] = updated;
    initTasks = TaskStore.tasks;
}

export const searchATask = (index) => {
    return TaskStore.tasks[index];
}

export const switchCompleted = (task) => {
    task.completed = !task.completed;
}

export const getTasks = () => {
    return TaskStore.tasks;
}

export const sortByDefault = () => {
    TaskStore.tasks.sort((a, b) => {
        if (a.completed == b.completed) {
            if (a.priority > b.priority)
                return -1;
            else if (a.priority < b.priority)
                return 1;
            else
                return 0;
        } else if (a.completed) {
            return 1;
        } else {
            return -1;
        }
    })
}

export const sortByPriority = () => {
    TaskStore.tasks.sort((a, b) => {
        if (a.priority === b.priority) {
            return 0;
        } else if (a.priority < b.priority) {
            return 1;
        } else {
            return -1;
        }
    })
}

export const sortByDeadline = () => {
    TaskStore.tasks.sort((a, b) => {
        if (a.deadline === b.deadline) {
            return 0;
        } else if (a.deadline < b.deadline) {
            return -1;
        } else {
            return 1;
        }
    })
}

export const filterByCompleted = () => {
    noFilter();
    TaskStore.tasks = TaskStore.tasks.filter(task => task.completed == true);
}

export const filterByUncompleted = () => {
    noFilter();
    TaskStore.tasks = TaskStore.tasks.filter(task => task.completed == false);
}

export const filterByPriority = (priority) => {
    noFilter();
    TaskStore.tasks.filter(task => task.priority == priority);
}

export const noFilter = () => {
    TaskStore.tasks = initTasks;
}