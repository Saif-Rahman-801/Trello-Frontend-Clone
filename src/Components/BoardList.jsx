import React, { useContext } from "react";
import { BoardContext } from "../Contexts/Board";
import { Link } from "react-router-dom";
import BoardItem from "./BoardItem";

const BoardList = () => {
  const { boards } = useContext(BoardContext);
  return (
    <div>
      {boards?.map((board) => (
        <Link key={board.id} to={`/${board.id}`}>
            <BoardItem board={board}></BoardItem>
        </Link>
      ))}
    </div>
  );
};

export default BoardList;
