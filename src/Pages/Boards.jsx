import React from "react";
import BoardCreatingForm from "../Components/BoardCreatingForm";
import BoardList from "../Components/BoardList";

const Boards = () => {
  return (
    <div>
      <BoardCreatingForm />
      <BoardList />
    </div>
  );
};

export default Boards;
