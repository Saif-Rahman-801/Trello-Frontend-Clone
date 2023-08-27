import React, { useContext } from "react";
import { BoardContext } from "../Contexts/Board";
import { TaskContext } from "../Contexts/Task";
import { TaskListsContext } from "../Contexts/TaskList";

const BoardItem = ({ board }) => {
  const { dispatchBoardAction } = useContext(BoardContext);
  const { tasks, dispatchTaskAction } = useContext(TaskContext);
  const { taskLists, dispatchTaskListsAction } = useContext(TaskListsContext);

  const removeBoardHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const taskslistToBeDeleted = taskLists.filter(
      (list) => list.boardId === board.id
    );
    const tasksToBeDeleted = tasks.filter((task) => task.boardId === board.id);
    dispatchBoardAction({
      type: "DELETE_BOARD",
      payload: {
        id: board.id,
      },
    });
    taskslistToBeDeleted.forEach((list) => {
      dispatchTaskListsAction({
        type: "DELETE_LIST",
        payload: { id: list.id },
      });
    });
    tasksToBeDeleted.forEach((task) => {
      dispatchTaskAction({ type: "DELETE_TASK", payload: { id: task.id } });
    });
  };

  //   JSX
  return (
    <div>
      <h5>{board.title}</h5>
      <button onClick={(e) => removeBoardHandler(e)}>Del</button>
      <p>This board has {board.taskLists.length}</p>
    </div>
  );
};

export default BoardItem;
