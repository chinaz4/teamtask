import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskColumn from "./TaskColumn";
import { DndContext } from "@dnd-kit/core";
import { ACTIONS } from "../reducers/TaskReducer";


function TaskBoard({projectId}) {
  const { state, dispatch } = useContext(TaskContext);

  const todoTasks = state.tasks.filter(
  (task) => task.projectId === projectId && task.status === "todo"
    );

  const inProgressTasks = state.tasks.filter(
  (task) => task.projectId === projectId && task.status === "inprogress"
    );

  const completedTasks = state.tasks.filter(
  (task) => task.projectId === projectId && task.status === "completed"
    );

    const handleDragEnd = (event) => {
  const { active, over } = event;

  console.log("ACTIVE:", active);
  console.log("OVER:", over);

  // ❌ If dropped outside any column
   if (!over) {
    console.log("Dropped outside a column ❌");
    return;
  }

  console.log("Dropped inside:", over.id);

  const taskId = active.id;
  const newStatus = over.id;

  dispatch({
    type: ACTIONS.MOVE_TASK,
    payload: { id: taskId, newStatus },
  }); }

  return(<>  
   <DndContext onDragEnd={handleDragEnd}>
    <div className="flex gap-4">
  <TaskColumn 
  title="To Do" 
  tasks={todoTasks} 
  status="todo" 
  projectId={projectId} 
/>

<TaskColumn 
  title="In Progress" 
  tasks={inProgressTasks} 
  status="inprogress" 
  projectId={projectId} 
/>

<TaskColumn 
  title="Completed" 
  tasks={completedTasks} 
  status="completed" 
  projectId={projectId} 
/>
    </div>
    </DndContext>
  </>);
}

export default TaskBoard;

/**Purpose:

Main container for tasks
add task button will be here
💡 What it does:
Holds all 3 columns:
To-Do
In Progress
Completed
Filters tasks into correct columns
🧠 Think:

“The whole board (like Trello board)” */