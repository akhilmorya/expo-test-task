import React from 'react';
import Routes from './src/routes/index';
import { Provider } from 'react-redux'
import configureStore from './src/stores/index';

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
     <Routes/>
    </Provider>
  );
}
