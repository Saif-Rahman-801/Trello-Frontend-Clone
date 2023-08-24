import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { boardReducer } from "../Reducers/Board";

export const BoardContext = createContext();
const BoardProvider = ({ children }) => {
  const [boards, dispatchBoardAction] = useReducer(boardReducer, []);
  return (
  <BoardContext.Provider value={{boards, dispatchBoardAction}}>
    {children}
</BoardContext.Provider>);
};

export default BoardProvider;
