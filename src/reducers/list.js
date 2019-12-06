// List reducer to update the data for list

import {
     list
  } from '../utils/mock/index';
  import { LIST, REMOVE_ITEM } from '../utils/constants/index';
  
  const initialState = {
      list,
    };
  
  export function listReducer(state = initialState, action) {
    switch (action.type) {
      case LIST:
        return {
          list: [...state.list],
        };
      case REMOVE_ITEM: 
        return {
          list: [...action.data],
        }; 
      default:
        return state;
    }
  }
  
  export default {
    listReducer
  };