import { create } from "zustand";
import { generateId } from "../helpers";

interface Task {
  id: string,
  title: string,
  createdAt: number,
}

interface TaskStore {
  tasks: Task[],
  createTask: (title: string) => void;
  updateTask: (title: string, id: string) => void,
  removeTask: (id: string) => void;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  createTask: (title) => {
    const {tasks} = get();
    const newTask = {
      id: generateId(),
      title,
      createdAt: Date.now(),
    }

    set({
      tasks: [newTask].concat(tasks),
    })
  },
  updateTask: (title: string, id: string) => {
    const {tasks} = get();

    set({
      tasks: tasks.map(task => ({
        ...task,
        title: task.id === id ? title : task.title,
      }))
    })
  },
  removeTask: (id: string) => {
    const {tasks} = get();

    set({
      tasks: tasks.filter(task => ({
         tasks: task.id !== id
      }))
    })
  },
}));