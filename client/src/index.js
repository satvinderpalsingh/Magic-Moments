import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import reducers from './reducers';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk';
import './index.css';



const store=createStore(reducers,compose(applyMiddleware(reduxThunk)));



ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));