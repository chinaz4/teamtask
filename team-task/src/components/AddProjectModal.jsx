import { useState } from "react";

function AddProjectModal({ isOpen, onClose, onAddProject }) {
  const [projectName, setProjectName] = useState("");

  if (!isOpen) return null; // Don't render if closed

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName.trim()) return;

    onAddProject(projectName); // send data to parent
    setProjectName("");
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">New Project</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />

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

export default AddProjectModal;