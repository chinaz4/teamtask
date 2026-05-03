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
      <div className="bg-green-200 p-6 space-y-2.5 rounded-xl w-80 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">New Project</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-cyan-50 rounded-md p-2"
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
              className="px-3 py-1 bg-green-800 text-white rounded"
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