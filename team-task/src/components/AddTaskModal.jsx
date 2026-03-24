import { useState } from "react";



function AddTaskModal({isOpen, onClose, onAddTask}) {
  const [title, setTitle] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [deadline, setDeadline] = useState("");

   if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    onAddTask(title, assignedUser, deadline);
    setTitle("");
    setAssignedUser("");
    setDeadline("");
    onClose()
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
    </form>
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