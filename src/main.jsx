import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BoardProvider from "./Contexts/Board.jsx";
import TaskListsProvider from "./Contexts/TaskList.jsx";
import TaskProvider from "./Contexts/Task.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BoardProvider>
      <TaskListsProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </TaskListsProvider>
    </BoardProvider>
  </React.StrictMode>
);
