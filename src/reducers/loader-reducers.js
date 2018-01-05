import {ACTIONS} from "../constants";

// get action list from particular loader details
const getActionList = (loaderDetails = {}) => {
  const { actions = [] } = loaderDetails;
  return actions;
};

const loaders = (state = {}, action) => {
  switch (action.type) {
    // Add action name into associated loader's actions list
    case ACTIONS.ADD_ACTION: {
      const nextState = { ...state };
      const { loaders = [] } = action;
      loaders.forEach((loaderName) => {
        const loaderDetails = nextState[loaderName];
        nextState[loaderName] = {
          ...loaderDetails,
          actions: [...getActionList(loaderDetails), action.actionName],
        };
      });
      return nextState;
    }

    // Remove action name into associated loader's actions list
    case ACTIONS.REMOVE_ACTION: {
      const { actionName } = action;
      return Object.entries(state)
        .reduce((nextState, [loaderName, loaderDetails = {}]) => {
          const { actions = [] } = loaderDetails;
          const actionIndex = actions.indexOf(actionName);
          if (actionIndex >= 0) {
            loaderDetails = {
              ...loaderDetails,
              actions: [...actions.slice(0, actionIndex), ...actions.slice(actionIndex + 1)],
            };
          }
          nextState[loaderName] = loaderDetails;
          return nextState;
        }, {});
    }
    default: return state;
  }
};
export default loaders;
