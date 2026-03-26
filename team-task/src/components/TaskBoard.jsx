import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskColumn from "./TaskColumn";


function TaskBoard({projectId}) {
  const { state } = useContext(TaskContext);
 console.log("All tasks:", state.tasks);
  const todoTasks = state.tasks.filter(
  (task) => task.projectId === projectId && task.status === "todo"
    );

  const inProgressTasks = state.tasks.filter(
  (task) => task.projectId === projectId && task.status === "inprogress"
    );

  const completedTasks = state.tasks.filter(
  (task) => task.projectId === projectId && task.status === "completed"
    );

  return(<>  
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