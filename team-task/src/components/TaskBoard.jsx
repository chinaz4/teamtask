import TaskItem from "./TaskItem";
import { useState } from "react";


function TaskBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(<>
  <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-3 py-1 bg-blue-500 text-white rounded"
      >
        New Task
      </button>
      < TaskItem 
       isModalOpen={isModalOpen}
       setIsModalOpen={setIsModalOpen} />
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