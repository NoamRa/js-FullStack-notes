import React from 'react';
import { render } from 'react-dom';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    // Link,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './logic/store.js';

import './index.css';

import App from './App';
import NotFound from './components/NotFound/NotFound.jsx'

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />


                    {/* 404 not found */}
                    <Route component={NotFound} />
                    
                </Switch>
            </Router>
        </Provider>
    )
}

render( 
    <Root/>, 
    document.getElementById('root')
);

registerServiceWorker();
