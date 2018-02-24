import React from 'react';
import { render } from 'react-dom';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    // Link,
} from "react-router-dom";

import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import NotFound from './components/NotFound/NotFound.jsx'

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App} />


                {/* 404 not found */}
                <Route component={NotFound} />
                
            </Switch>
        </Router>
    )
}

render( 
    <Root/>, 
    document.getElementById('root')
);

registerServiceWorker();
