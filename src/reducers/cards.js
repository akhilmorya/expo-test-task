// Cards reducer to update the data for cards

import {
    cards
  } from '../utils/mock/index';
  import { CARDS } from '../utils/constants/index';
  
  const initialState = {
      cards      
    };
  
  export function cardReducer(state = initialState, action) {
    switch (action.type) {
      case CARDS:
        return {
          cards: [...state.cards],
        };
      default:
        return state;
    }
  }

  export default {
    cardReducer
  };