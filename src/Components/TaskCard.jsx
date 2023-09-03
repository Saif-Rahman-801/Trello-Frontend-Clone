import React, { useContext, useState } from "react";
import { TaskContext } from "../Contexts/Task";
import { TaskListsContext } from "../Contexts/TaskList";
import { BoardContext } from "../Contexts/Board";
import AddItemForm from "./AddItemForm";

const TaskCard = ({ task }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTaskAction } = useContext(TaskContext);
  const { dispatchTaskListsAction } = useContext(TaskListsContext);
  const { dispatchBoardAction } = useContext(BoardContext);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTaskAction({ type: "UPDATE_TASK", id: task.id, title: taskTitle });
    setEditMode(false);
  };

  const removeTaskHandler = () => {
    dispatchTaskAction({ type: "DELETE_TASK", payload: { id: task.id } });
    dispatchTaskListsAction({type: 'REMOVE_TASK_ID_FROM_LIST', payload: {id: task.listId, taskId: task.id}})
    dispatchBoardAction({type: 'REMOVE_TASK_ID_FROM_A_BOARD', payload: {id: task.boardId, taskId: task.id}})
  };


  return <div>
    {
        editMode ? (
            <AddItemForm 
            onChangeHandler={(e) => setTaskTitle(e.target.value)}
            title={taskTitle}
            setEditMode={setEditMode}
            submitHandler={submitHandler}
            /> 
        ):(
            <div onClick={(e) => setEditMode(true)} className="task-card">
                <p>
                    {taskTitle}
                </p>
                <button onClick={removeTaskHandler} className="add-item-icon">
                    Del
                </button>
            </div>
        )
    }
  </div>;
};

export default TaskCard;
