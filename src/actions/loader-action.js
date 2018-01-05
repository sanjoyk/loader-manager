import { ACTIONS } from "../constants";
export const addLoader = ({loaderInfo})=>
                  ({
                    type: ACTIONS.ADD_LOADER,
                    loaderInfo
                   });

export const addAction = ({loaders, actionName})=>
                    ({
                        type: ACTIONS.ADD_ACTION,
                        loaders,
                        actionName
                      });

export const removeAction = (actionName)=>
                        ({
                          type: ACTIONS.REMOVE_ACTION,
                          actionName,
                        });
export const setNewLoaderStatus = (status)=>
                        ({
                          type:ACTIONS.DISABLE_ADD_NEW_LOADER,
                          status
                        })
