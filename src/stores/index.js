import { createStore } from 'redux'
import rootReducer from '../reducers/index';

// Redux store configuration to handle application states and react components props
export default function configureStore() {
  let store = createStore(rootReducer)
  return store
}