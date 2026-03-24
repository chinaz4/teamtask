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
    <div>
        <nav>
        <Link to="/">Projects</Link>
      </nav>
      <h1>Project Details </h1>
     {project ? (<>
  <h2>Project: {project.name}</h2>
  <TaskBoard projectId={Number(id)} />
  </>
      ) : (
  <p>Project not found. Go back to <Link to="/">Project List</Link></p>
  )}
      
    </div>
  );
}

export default ProjectDetails;