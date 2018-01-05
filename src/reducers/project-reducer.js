import {ACTIONS,  LOADER_CONTAINERS, SPINNERS} from "../constants";

const projectReducerDefaultValue = {
  // loader container configs, considering three loaders are positioned into their container
  containersConfig: [
    {
      CONTAINER_NAME: LOADER_CONTAINERS.USER_DETAILS,
      LOADER_TYPE: SPINNERS.RING_LOADER,
    },
    {
      CONTAINER_NAME: LOADER_CONTAINERS.MUTUAL_FRIENDS,
      LOADER_TYPE: SPINNERS.BAR_LOADER,
    },
    {
      CONTAINER_NAME: LOADER_CONTAINERS.USER_LISTS,
      LOADER_TYPE: SPINNERS.BAR_LOADER,
    },
  ],
  // loader option for particular loader container
  loaderOptions: [
    { value: LOADER_CONTAINERS.USER_DETAILS, label: LOADER_CONTAINERS.USER_DETAILS },
    { value: LOADER_CONTAINERS.MUTUAL_FRIENDS, label: LOADER_CONTAINERS.MUTUAL_FRIENDS },
    { value: LOADER_CONTAINERS.USER_LISTS, label: LOADER_CONTAINERS.USER_LISTS },
  ],
  allowAddNewLoader:true
};

const projectReducer = (state = projectReducerDefaultValue, action) => {
  switch (action.type) {
    case ACTIONS.ADD_LOADER: { // adding container config and associated loader config
      const {  loaderInfo } = action;
      return {
        ...state,
        containersConfig: [...state.containersConfig, loaderInfo],
        loaderOptions: [
          ...state.loaderOptions,
          {
            value: loaderInfo.CONTAINER_NAME,
            label: loaderInfo.CONTAINER_NAME,
          },
        ],
      };
    }
    case ACTIONS.DISABLE_ADD_NEW_LOADER:
      return {...state, allowAddNewLoader: action.status}


    default: return state;
  }
};
export default projectReducer;
