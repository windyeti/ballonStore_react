import React from 'react';
import RenderDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import './main.css';
import Layout from 'containers/layout';
import Catalog from 'containers/catalog';
import Main from 'containers/main';
import Good from 'containers/good';
import HeBallon from 'containers/heBallon';
import AirBallon from 'containers/airBallon';
import MetalBallon from 'containers/metalBallon';
import Decoration from 'containers/decoration';
import Basket from 'containers/basket';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

RenderDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Main}/>
                <Route path='/allCategory' component={Catalog}/>
                <Route path='/category/:id' component={Good}/>
            </Route>
            <Route path='/1/:id' component={HeBallon}/>
            <Route path='/2/:id' component={AirBallon}/>
            <Route path='/3/:id' component={MetalBallon}/>
            <Route path='/4/:id' component={Decoration}/>
            <Route path='/basket' component={Basket}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);