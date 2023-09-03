export const taskListReducer = (tasklists, action) => {
  switch (action.type) {
    case "CREATE_LIST": {
      const taskList = {
        id: action.payload.id,
        title: action.payload.title,
        tasks: [],
        boardId: action.payload.boardId,
      };
      return [...tasklists, taskList];
    }
    case "UPDATE_LIST": {
      return tasklists.map((taskList) => {
        if (taskList.id === action.payload.id) {
          taskList.title = action.payload.title || taskList.title;
        }
      });
    }
    case "DELETE_LIST": {
      return tasklists.filter((item) => item.id !== action.payload.id);
    }
    case "ADD_TASK_ID_TO_LIST": {
      return tasklists.map((list) => {
        if (list.id === action.payload.id) {
          list.tasks.push[action.payload.taskId];
        }
        return list;
      });
    }
    case "REMOVE_TASK_ID_FROM_LIST": {
      return tasklists.map((list) => {
        if (list.id === action.payload.id) {
          list.tasks = list.tasks.filter(
            (task) => task.id !== action.payload.taskId
          );
        }
        return list;
      });
    }
    case "CHANGE_BOARD_ID_OF_LIST": {
      return tasklists.map((list) => {
        if (list.id === action.payload.id) {
          list.boardId = action.payload.boardId;
        }
        return list
      });
    }
    default: {
      return tasklists;
    }
  }
};
