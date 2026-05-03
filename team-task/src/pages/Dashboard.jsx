import { Outlet } from "react-router-dom";
import ProjectList from "./ProjectList";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-2/5 bg-green-50">
        <ProjectList />
      </div>

      {/* Right Main Area */}
      <div className="flex-1 bg-green-50">
        {/* Render the selected project details here */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;