import { Outlet } from "react-router-dom";
import ProjectList from "./ProjectList";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-300 p-4">
        <ProjectList />
      </div>

      {/* Right Main Area */}
      <div className="flex-1 bg-white p-4">
        {/* Render the selected project details here */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;