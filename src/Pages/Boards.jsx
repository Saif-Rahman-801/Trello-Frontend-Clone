import React from "react";
import BoardCreatingForm from "../Components/BoardCreatingForm";
import BoardList from "../Components/BoardList";

const Boards = () => {
  return (
    <div>
      <h2>I am from board</h2>
      <BoardCreatingForm />
      <BoardList />
    </div>
  );
};

export default Boards;
