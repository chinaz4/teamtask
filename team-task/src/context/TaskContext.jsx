import { createContext, useReducer, useEffect } from "react";
import TaskReducer from "../reducers/TaskReducer";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const initialState = {
  projects: JSON.parse(localStorage.getItem("projects")) || [],
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

   const [state, dispatch] = useReducer(TaskReducer, initialState);
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(state.projects));
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

    

