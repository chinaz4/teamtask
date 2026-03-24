import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducers/TaskReducer";
import AddProjectModal from "../components/AddProjectModal";

function ProjectList() {
  const { state, dispatch } = useContext(TaskContext);

  // 🔹 controls modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 handles adding project (called from modal)
  const handleAddProject = (projectName) => {
    if (projectName.trim() === "") return;

    const newProject = {
      id: Date.now(),
      name: projectName,
    };

    dispatch({ type: ACTIONS.ADD_PROJECT, payload: newProject });
  };

  return (
    <div className="w-full px-2.5 py-3.5 min-h-screen bg-gray-300">
      <h1 className="text-2xl font-sans py-2">Project List</h1>

      {/* 🔹 New Project Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-3 py-1 bg-blue-500 text-white rounded"
      >
        New Project
      </button>

      {/* 🔹 Project List */}
      <ul>
        {state.projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* 🔹 Modal */}
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
}

export default ProjectList;