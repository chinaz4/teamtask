import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TaskBoard from "../components/TaskBoard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function ProjectDetails() {
  const { id } = useParams();
  const { state } = useContext(TaskContext);

// Find the project using the id from the URL
 const project = state.projects.find((p) => p.id === Number(id));

  return (
    <div className="min-h-screen bg-[#F0FDF4] p-6">    

      {/*NAVIGATION*/}
      <nav className="mb-6">      

        <Link
          to="/"
          className="text-[#15803D] font-medium hover:underline"
        >        
          ← Projects
        </Link>
      </nav>

      {/* PROJECT HEADER */}
      {project ? (
        <>
          <div className="mb-6 mx-4 bg-green-200 border border-[#DCFCE7] rounded-xl p-4 shadow-sm">
          {/* CHANGED: added card layout for project header */}

            <h2 className="text-2xl font-bold text-[#14532D]">
              {project.name}
            </h2>
            
            <p className="text-sm text-[#6B7280] mt-1">
              Manage tasks, track progress, and collaborate in real time
            </p>            
          </div>
         
          <TaskBoard projectId={Number(id)} />
        </>
      ) : (
        <div className="bg-green-50 border border-[#DCFCE7] rounded-xl p-6 text-center">
        

          <p className="text-[#14532D] font-medium">
            Project not found
          </p>

          <p className="text-sm text-[#6B7280] mt-2">
            Go back to{" "}
            <Link
              to="/"
              className="text-[#22C55E] hover:underline"
            >
              Project List
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;