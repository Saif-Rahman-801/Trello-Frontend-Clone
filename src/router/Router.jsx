import { createBrowserRouter } from "react-router-dom";
import Boards from "../Pages/Boards";
import BoardDetails from "../Pages/BoardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Boards></Boards>,
  },
  {
    path: "/:boardId",
    element: <BoardDetails />,
  },
]);

export default router;
