import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import history from './redux/history';
import App from './App';

import Step1 from './components/Signup/Step1/index';
import Step2 from './components/Signup/Step2/index';
import Step3 from './components/Signup/Step3/index';


const AppRouter = (
    <Router history={history}>
        <Route path='/' component={App}>
            <IndexRoute component={Step1} />
            <Route path='/step2' component={Step2} />
            <Route path='/step3' component={Step3} />
        </Route>
    </Router>
);


export default AppRouter;