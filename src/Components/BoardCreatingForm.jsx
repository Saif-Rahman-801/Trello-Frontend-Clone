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
    <div className="p-4">
      <form onSubmit={(e) => submitHandler(e)} className="flex items-center justify-center">
        <input
          type="text"
          name="boardTitle"
          id="text-field"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          className="p-2 border rounded-l-md w-2/3"
          placeholder="Enter board title..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md"
        >
          Create Board
        </button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
