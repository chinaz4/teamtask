
export const ACTIONS = {
  ADD_PROJECT: "ADD_PROJECT",
  ADD_TASK: "ADD_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  MOVE_TASK: "MOVE_TASK",
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROJECT:
  return {
    ...state,
    projects: [...state.projects, action.payload],
  };

    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // add new task to tasks array
      };


    default:
      return state;
  }

};

export default TaskReducer;