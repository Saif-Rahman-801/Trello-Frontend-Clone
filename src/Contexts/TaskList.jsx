import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { taskListReducer } from "../Reducers/TaskList";

export const TaskListsContext = createContext();

const TaskListsProvider = ({ children }) => {
  const [taskLists, dispatchTaskListsAction] = useReducer(taskListReducer, []);
  return (
    <TaskListsContext.Provider value={{ taskLists, dispatchTaskListsAction }}>
      {children}
    </TaskListsContext.Provider>
  );
};

export default TaskListsProvider;
