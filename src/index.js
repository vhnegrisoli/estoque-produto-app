import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />,
            </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
