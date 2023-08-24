const boardReducer = (boards, action) => {
  //action: {type: ..., payload: ..., etc}
  switch (action.type) {
    case "CREATE_BOARD": {
      const board = {
        id: Date.now(),
        title: action.payload.title,
        taskList: [],
        task: [],
        createdAt: new Date().toLocaleDateString(),
      };
      return [...boards, board];
    }
    /* case "EDIT_BOARD": {
    } */
    case "UPDATE_BOARD": {
      const toBeUpdatedBoard = boards.find(
        (item) => item.id === action.payload.id
      );
      return boards.map((board) => {
        if (board.id === toBeUpdatedBoard.id) {
          board.title = action.payload.title;
        }
        return board;
      });
    }
    case "DELETE_BOARD": {
      return boards.filter((board) => board.id !== action.payload.id);
    }
    case "ADD_LIST_ID_TO_BOARD": {
      return boards.map((board) => {
        if (board.id === action.payload.id) {
          board.taskList.push(action.payload.taskListId);
        }
        return board;
      });
    }
    case "REMOVE_LIST_ID_FROM_BOARD": {
    }
    case "ADD_TASK_ID_TO_BOARD": {
    }
    case "REMOVE_TASK_ID_FROM_BOARD": {
    }
    default: {
      return boards;
    }
  }
};
