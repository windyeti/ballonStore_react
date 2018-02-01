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
                <Route path='/' component={Catalog}/>
                <Route path='/category/:id' component={Catalog}/>
            </Route>
            <Route path='/heBallon/:id' component={HeBallon}/>
            <Route path='/airBallon/:id' component={AirBallon}/>
            <Route path='/metalBallon/:id' component={MetalBallon}/>
            <Route path='/decoration/:id' component={Decoration}/>
            <Route path='/basket' component={Basket}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);