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
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg border w-[100%]">
      <h5 className="text-xl font-semibold mb-2">{board.title}</h5>
      <button
        onClick={(e) => removeBoardHandler(e)}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
      >
        Delete
      </button>
      <p className="mt-2">This board has {board.taskLists.length}</p>
    </div>
  );
};

export default BoardItem;
