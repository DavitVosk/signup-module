import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';

import rootReducer from './root_reducer';
import { reducer as formReducer } from 'redux-form'

const middleware = routerMiddleware(browserHistory);

const store = createStore(
    combineReducers({
        routing: routerReducer,
        form: formReducer,
        ...rootReducer,
    }),
    applyMiddleware(middleware)
);

export default store;
