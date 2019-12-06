// Combine all the reducers of application

import { combineReducers } from 'redux'
import { cardReducer } from './cards';
import { listReducer } from './list';
import { dealsReducer } from './deals';

const rootReducer = combineReducers({
    cardReducer,
    listReducer,
    dealsReducer
})

export default rootReducer