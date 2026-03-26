import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducers/TaskReducer";
import TaskItem from "./TaskItem";
import AddTaskModal from "./AddTaskModal";

function TaskColumn({ title, tasks, status, projectId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dispatch } = useContext(TaskContext);

  const handleAddTask = (taskTitle, assignedName, deadline) => {
    if (!taskTitle.trim()) return;
    console.log("Creating task in column:", status, projectId);
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      AssignedName: assignedName,
      Date: deadline,
      status: status, // 👈 comes from column
      projectId: projectId,
    };

    dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
  };

  return (
    <div className="bg-gray-100 p-4 rounded w-80 min-h-75">
      <h2 className="text-lg font-bold mb-3">{title}</h2>

      {/* Add button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-3 px-2 py-1 bg-blue-500 text-white rounded text-sm"
      >
        + Add Task
      </button>

      {/* Tasks */}
      <div className="flex flex-col gap-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p className="text-sm text-gray-500">No tasks here</p>
        )}
      </div>

      {/* Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
}

export default TaskColumn;

/**Purpose:

Represents one column

💡 What it does:
Displays tasks based on status
Accepts:
title (To-Do, etc.)
list of tasks
🧠 Think:

“One vertical section (column)” */