import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducers/TaskReducer";
import TaskItem from "./TaskItem";
import AddTaskModal from "./AddTaskModal";
import { useDroppable } from "@dnd-kit/core";

function TaskColumn({ title, tasks, status, projectId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const { dispatch } = useContext(TaskContext);

  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  const handleAddTask = (taskData) => {
    const newTask = {
      id: taskData.id || Date.now().toString(),
      title: taskData.title,
      assignedUser: taskData.assignedUser,
      deadline: taskData.deadline,
      status: status,
      projectId: projectId,
    };

    if (taskData.id) {
      dispatch({
        type: ACTIONS.UPDATE_TASK,
        payload: {
          id: taskData.id,
          updates: newTask,
        },
      });
    } else {
      dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  return (
    <div
      ref={setNodeRef}
      className={`lg:w-80 min-h-100 md:w-full sm:w-full p-4 rounded-2xl transition-colors
        ${isOver ? "bg-green-300 border-green-400" : "bg-green-200 border-green-300"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-green-900">
          {title}
        </h2>

        <span className="text-xs bg-green-50 text-green-800 px-2 py-0.5 rounded-full">
          {tasks.length}
        </span>
      </div>

      {/* Add Task Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full mb-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        + Add Task
      </button>

      {/* Task List */}
      <div className="flex flex-col gap-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div className="text-center text-sm text-gray-400 py-6">
            No tasks here
          </div>
        )}
      </div>

      {/* Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onAddTask={handleAddTask}
        editingTask={editingTask}
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