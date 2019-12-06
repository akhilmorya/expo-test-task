// Deals reducer to update the data for deals

import {
    deals
  } from '../utils/mock/index';
  import { DEALS } from '../utils/constants/index';
  
  const initialState = {
      deals
    };
  
  export function dealsReducer(state = initialState, action) {
    switch (action.type) {
      case DEALS:
        return {
          deals: [...state.deals],
        };
      default:
        return state;
    }
  }
  
  export default {
    dealsReducer
  };