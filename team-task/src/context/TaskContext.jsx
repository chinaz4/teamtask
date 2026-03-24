import { createContext, useReducer } from "react";
import TaskReducer from "../reducers/TaskReducer";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const initialState = {
        projects: [],
        tasks: [],
       
    };

   const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

    

