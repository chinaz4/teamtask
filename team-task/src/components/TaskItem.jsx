
import { TaskContext } from "../context/TaskContext";
import { useContext, useState } from "react";
import { ACTIONS } from "../reducers/TaskReducer";
import AddTaskModal from "./AddTaskModal";


function TaskItem({isModalOpen, setIsModalOpen}) {
    const { state, dispatch } = useContext(TaskContext);
    

    const handleAddTask = (taskTitle, assignedName, deadline) => {
        if (taskTitle.trim() === "") return;
        const newTask = {
            id: Date.now(),
            title: taskTitle,
            AssignedName: assignedName,
            Date: deadline
        };
        dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
    };


  return ( 
    <>

        {/*task list*/}
        <ul>
            {state.tasks.map((task) => (
                <li key={task.id} className="bg-white p-2 rounded shadow">
                    <div className="bg-gray-300 flex flex-col p-3 gap-2 w-350px h-auto ">
        <h1 className="text-base text-blue-950 font-semibold ">
            {task.title}
        </h1>
        <div className="flex justify-between ">
            <p className="text-[14px]"> {task.AssignedName} </p>
            <div className="bg-amber-300 text-black px-2 py-1 text-[11px]">
                {task.Date}
            </div>
        </div>
         </div>
                </li>
            ))}
        </ul>

            < AddTaskModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            onAddTask={handleAddTask} />

    </>
 );
}

export default TaskItem;

/**Purpose:

Represents one task card

💡 What it does:
Shows:
Task title
Assigned person
Deadline
Handles:
Edit
Delete
🧠 Think:

“One draggable card” */