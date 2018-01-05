import { RingLoader, BarLoader, CircleLoader } from "react-spinners";

// Action Constants
export const ACTIONS = {
  ADD_ACTION: "AddAction",
  REMOVE_ACTION: "RemoevAction",
  ADD_LOADER: "AddLoader",
  DISABLE_ADD_NEW_LOADER:"DisableAddNewLoader"
};

// Considering maximum two Actions are used, can be more
export const ACTIONS_NAMES = {
  ACTION1: "Action1",
  ACTION2: "Action2",
};

// Considering maximum four loaders will be use, can be more
export const LOADER_CONTAINERS = {
  USER_DETAILS: "UserDetails",
  MUTUAL_FRIENDS: "MutualFriends",
  USER_LISTS: "UserLists",
  CURRENT_ACTIVE_USERS: "CurrentActiveUsers",
};

// Spinner Types, Using only three types from 'react-spinners' library
export const SPINNERS = {
  CIRCLE_LOADER: CircleLoader,
  BAR_LOADER: BarLoader,
  RING_LOADER: RingLoader,
};
