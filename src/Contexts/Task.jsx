import React, { createContext, useReducer } from "react";
import { taskReducer } from "../Reducers/Task";

export const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const [task, dispatchTaskAction] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ task, dispatchTaskAction }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
