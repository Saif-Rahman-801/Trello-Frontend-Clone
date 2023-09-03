import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TaskListsContext } from "../Contexts/TaskList";
import { BoardContext } from "../Contexts/Board";
import TaskList from "../Components/TaskList";
import AddItem from "../Components/AddItem";
import AddItemForm from "../Components/AddItemForm";

const BoardDetails = () => {
  const [listTitle, setListTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  let { boardId } = useParams();
  const { taskLists, dispatchTaskListsAction } = useContext(TaskListsContext);
  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatchTaskListsAction({
      type: "CREATE_LIST",
      payload: {
        id: id,
        boardId: boardId,
        title: listTitle,
      },
    });
    dispatchBoardAction({
      type: "ADD_LIST_ID_TO_BOARD",
      payload: {
        id: boardId,
        taskListId: id,
      },
    });
    setListTitle("");
    setEditMode(false);
  };

  return (
    <div className="flex flex-row">
      <button>
        <Link to="/">Back to home</Link>
      </button>
      {taskLists
        ?.filter((item) => item.boardId === boardId)
        ?.map((taskLists) => (
          <TaskList taskList={taskLists} key={taskLists.id} />
        ))}
      {!editMode ? (
        <AddItem listAddItem setEditMode={setEditMode} />
      ) : (
        <AddItemForm
          setEditMode={setEditMode}
          listForm
          submitHandler={submitHandler}
          title={listTitle}
          onChangeHandler={(e) => setListTitle(e.target.value)}
        />
      )}
    </div>
  );
};

export default BoardDetails;
