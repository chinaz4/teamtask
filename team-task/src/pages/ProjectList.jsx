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
    <div className="w-full py-3.5 px-3 min-h-screen bg-green-200 border-r-2 border-green-100  ">
      <div className="mb-6">
      <h1 className="text-3xl font-semibold text-[#14532D]">Projects</h1>

       <p className="text-sm text-[#6B7280] mt-1">
            Manage and track all your workspaces
          </p>
      </div>

      {/* 🔹 New Project Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-[#22C55E] text-white text-sm rounded-lg
          hover:bg-[#15803D] transition shadow-sm mb-4 "      >
        + New Project
      </button>

      {/* 🔹 Project List */}
       <div className="flex flex-col ">
     
        {state.projects.length > 0 ? (
          <>
            {state.projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="  text-center my-1 hover:shadow-md hover:border-[#22C55E] transition group"
              >
              
                <h2 className="text-[20px] py-0.5 rounded-md bg-green-100 text-shadow-2xs font-semibold text-[#14532D] group-hover:text-[#15803D]">
                  {project.name}
                </h2>

                
              </Link>
              
            ))}
            <p className="text-sm text-[#6B7280] px-1  mt-3">
                  Click to view tasks
                </p>
          </>
        ) : (
          <div className="col-span-full text-center text-[#6B7280] py-10">
          {/* CHANGED: empty state styled */}

            No projects yet. Create your first project 🚀
          </div>
        )}
      </div>

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