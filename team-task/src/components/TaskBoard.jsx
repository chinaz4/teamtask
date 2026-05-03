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

    const totalTasks = todoTasks.length + inProgressTasks.length + completedTasks.length;
const completedCount = completedTasks.length;

const progress = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

    const handleDragEnd = (event) => {
  const { active, over } = event;

  console.log("ACTIVE:", active);
  console.log("OVER:", over);

  // If dropped outside any column
   if (!over) {return;}

  console.log("Dropped inside:", over.id);

  const taskId = active.id;
  const newStatus = over.id;

  dispatch({
    type: ACTIONS.MOVE_TASK,
    payload: { id: taskId, newStatus },
  }); }

  return(<div className="p-4 bg-green-50">  
  
   <DndContext onDragEnd={handleDragEnd}>

    <div className="flex sm:flex-col sm:gap-3 lg:flex-row lg:gap-4  md:flex-col  md:gap-3 ">
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
    <div className="w-full my-5">
  <div className="h-2 bg-gray-300 rounded">
    <div
      className="h-2 bg-green-500 rounded"
      style={{ width: `${progress}%` }}
    />
  </div>

  <p className="text-sm mt-1">
    Progress: {Math.round(progress)}%
  </p>
</div>
  </div>);
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