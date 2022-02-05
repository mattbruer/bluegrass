import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import uiReducer from './store/reducers/ui';
import audioReducer from './store/reducers/audio';
import songReducer from './store/reducers/song';

import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const rootReducer = combineReducers({
  ui: uiReducer,
  audio: audioReducer,
  song: songReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
