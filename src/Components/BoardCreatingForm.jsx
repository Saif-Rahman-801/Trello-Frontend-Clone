import React, { useContext, useState } from "react";
import { BoardContext } from "../Contexts/Board";

const BoardCreatingForm = () => {
  const [boardTitle, setBoardTitle] = useState("");
  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (boardTitle) {
      dispatchBoardAction({
        type: "CREATE_BOARD",
        payload: {
          title: boardTitle,
        },
      });
      setBoardTitle("");
    } else {
      alert("Please Provide a Board name");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="boardTitle"
          id="text-field"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
        <button type="submit">Create Board</button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
