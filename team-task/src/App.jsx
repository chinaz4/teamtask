import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import ProjectDetails from './pages/ProjectDetails.jsx';
import { TaskProvider } from './context/TaskContext'; // import TaskProvider
import './App.css';

function App() {
  return (
    <TaskProvider>
      <h1 className='text-3xl font-mono text-center p-3 w-full bg-linear-to-r from-blue-500 to-purple-500 text-white'>
        Team Task 
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

/**
 * 🟣 Phase 5: Core Features
Add task creation form
Implement editing & deleting
Implement drag-and-drop
🟤 Phase 6: Persistence
Use useEffect to:
Save to localStorage
Load from localStorage
⚫ Phase 7: Enhancements
Add:
Deadline highlighting
Progress indicator
Input focus using useRef
🟢 Phase 8: Testing & Cleanup
Test:
Add/edit/delete tasks
Dragging
Page refresh
Refactor code:
Split large components
Improve naming
 */