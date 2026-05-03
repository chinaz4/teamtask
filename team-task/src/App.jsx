import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import ProjectDetails from './pages/ProjectDetails.jsx';
import { TaskProvider } from './context/TaskContext'; // import TaskProvider
import './App.css';

function App() {
  return (
    <TaskProvider>
      <h1 className="text-3xl font-semibold text-[#14532D] text-center py-4 w-full 
               bg-linear-to-r from-[#3bcc7c] via-[#f0fdf3] to-[#3bcc7c]
               border-b border-[#DCFCE7] tracking-wide">
  Team Task Flow  — Get Things Done 🚀
</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
           <Route path="/projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;

