import React, { useContext } from "react";
import { BoardContext } from "../Contexts/Board";
import { Link } from "react-router-dom";

const BoardList = () => {
  const { boards } = useContext(BoardContext);
  return (
    <div>
      {boards?.map((board) => (
        <Link key={board.id} to={`/${board.id}`}></Link>
      ))}
    </div>
  );
};

export default BoardList;
