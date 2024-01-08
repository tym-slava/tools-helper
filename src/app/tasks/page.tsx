"use client"

import { useTaskStore } from '@/data/stores/tasksStore';

import AddTaskComponent from '@/views/components/AddTaskComponent/page';

import "./tasks.scss";

export default function Tasks() {
  const [
    tasks,
    createTask,
    removeTask,
    updateTask,
  ] = useTaskStore(state => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask,
  ]);

  const addFunc = (title: string) => {
    if(title) {
      createTask(title);
    }
  }
  
  
  return (
    <div className="tasks-page__component">
      <h1>My Tasks</h1>
      <section className="add-task-section">
        <AddTaskComponent
          onAdd={addFunc}
        />
      </section>
      <section className="tasks-section">

      </section>
    </div>
  )
}
