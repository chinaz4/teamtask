import { Outlet } from "react-router-dom";
import ProjectList from "./ProjectList";

function Dashboard() {
  return (
    
    <div className="flex h-screen bg-[#F0FDF4]">
      {/* Left Sidebar */}
      <div className="w-2/5 bg-green-50 flex flex-col ">
        <ProjectList />
      </div>

      {/* Right Main Area */}
      <div className="flex-1  overflow-y-auto bg-green-50">
        {/* Render the selected project details here */}
        <Outlet />
      </div>
    </div>
    
  );
}

export default Dashboard;