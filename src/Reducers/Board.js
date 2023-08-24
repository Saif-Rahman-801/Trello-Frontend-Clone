const boardReducer = (boards, action) => {//action: {type: ..., payload: ..., etc}
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
      });
    }
    case "DELETE_BOARD": {
    }
    case "ADD_LIST_ID_TO_BOARD": {
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
