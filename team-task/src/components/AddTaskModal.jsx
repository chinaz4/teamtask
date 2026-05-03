import { useState, useEffect } from "react";



function AddTaskModal({isOpen, onClose, onAddTask, editingTask}) {
  const [title, setTitle] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
  if (editingTask) {
    setTitle(editingTask.title || "");
    setAssignedUser(editingTask.assignedUser || "");
    setDeadline(editingTask.deadline || "");
    setTags(editingTask.tags || []);
  } else {
    setTitle("");
    setAssignedUser("");
    setDeadline("");
    setTags([]);
  }
}, [editingTask]);

   if (!isOpen) return null;
  const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim() === "") return;

  const taskData = {
    id: editingTask ? editingTask.id : undefined,
    title,
    assignedUser,
    deadline,
    tags,
  };

  onAddTask(taskData); // same function handles ADD + UPDATE

  setTitle("");
  setAssignedUser("");
  setDeadline("");
  setTags([]);
  onClose();
};

  



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
        <h2 className="text-xl font-sans mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Assigned User" value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} />
          <input type="date" placeholder="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
           <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;



/**Purpose:

Form to create new tasks

💡 What it does:
Takes input:
Title
Assigned user
Deadline
Sends data to state
🧠 Think:

“Input form for new tasks” */