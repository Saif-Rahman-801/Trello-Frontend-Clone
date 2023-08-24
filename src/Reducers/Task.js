export const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case "CREATE_TASK": {
      const task = {
        id: Date.now(),
        title: action.payload.title,
        boardId: action.payload.boardId,
        taskListId: action.payload.taskListId,
      };
      return [...tasks, task];
    }
    case "UPDATE_TASK": {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
        }
        return task;
      });
    }
    case "DELETE_TASK": {
    }
    case "CHANGE_BOARD_ID_OF_TASK": {
    }
    case "CHANGE_LIST_ID_OF_TASK": {
    }
    default: {
      return tasks;
    }
  }
};
