import React, { useContext, useState } from "react";
import { TaskContext } from "../Contexts/Task";
import { TaskListsContext } from "../Contexts/TaskList";
import { BoardContext } from "../Contexts/Board";
import TaskCard from "./TaskCard";
import AddItemForm from "./AddItemForm";
import AddItem from "./AddItem";

const TaskList = ({ taskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { title } = taskList;
  const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
  const { dispatchTaskListsAction } = useContext(TaskListsContext);
  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now;
    // const listId = taskList.id;
    /* const task = {
      id,
      title: taskTitle,
      listId,
      boardId: taskList.boardId,
    }; */
    dispatchTaskAction({
      type: "CREATE_TASK",
      payload: {
        id: id,
        title: taskTitle,
        taskListId: taskList.id,
        boardId: taskList.boardId,
      },
    });
    dispatchTaskListsAction({
      type: "ADD_TASK_ID_TO_LIST",
      payload: { id: taskList.id, taskId: id },
    });
    dispatchBoardAction({
      type: "ADD_TASK_ID_TO_BOARD",
      payload: { id: taskList.boardId, taskId: id },
    });
    setTaskTitle("");
    setEditMode(false);
  };

  const removeListHandler = () => {
    dispatchTaskListsAction({
      type: "DELETE_LIST",
      payload: { id: taskList.id },
    });
    dispatchBoardAction({
      type: "REMOVE_LIST_ID_FROM_A_BOARD",
      payload: { id: taskList.boardId, listId: taskList.id },
    });
  };

  return (
    <div>
      <div className="list-container">
        <div className="list-titleContainer">
          <h5>{title} </h5>
          <button onClick={removeListHandler} className="add-item-icon">
            Del
          </button>
        </div>
        {taskList?.tasks
          ?.map((item) => {
            return allTasks.find((t) => t.id === item);
          })
          ?.map((task, index) => (
            <TaskCard
              index={index}
              id={task.id}
              taskList={taskList}
              task={task}
            />
          ))}
        {editMode ? (
          <AddItemForm
            submitHandler={submitHandler}
            title={taskTitle}
            onChangeHandler={(e) => setTaskTitle(e.target.value)}
            setEditMode={setEditMode}
            editMode={editMode}
          />
        ) : (
          <AddItem setEditMode={setEditMode} />
        )}
      </div>
    </div>
  );
};

export default TaskList;
