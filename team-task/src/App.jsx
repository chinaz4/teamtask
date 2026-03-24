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