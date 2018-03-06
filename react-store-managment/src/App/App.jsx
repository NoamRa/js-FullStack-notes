import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        console.log("dispatch in App ctor", dispatch);

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    routHandler(x){
        console.log("Route props as x", x);
        return (
            localStorage.getItem('user')
                ? <HomePage {...x} />
                : <Redirect to={{ pathname: '/login', state: { from: x.location } }} />
        )
    };

    //to use the "Router" add run the follwing command in the cli:
    //npm install --save react-router-dom
    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>

                        }

                        <Router history={console.log("history", history) || history}>
                            <div>
                                {
                                    /*
                                        Route -is a built in componrnt from 'react-router-dom'
                                        -----------------------------------------------
                                        Route gets as a props:       
                                        location?: H.Location;
                                        component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
                                        render?: ((props: RouteComponentProps<any>) => React.ReactNode);
                                        children?: ((props: RouteComponentProps<any>) => React.ReactNode) | React.ReactNode;
                                        path?: string;
                                        exact?: boolean;
                                        strict?: boolean;
                                     */
                                }
                                <Route exact path="/" render={this.routHandler} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { alert } = state;

    return {
        alert
    };
}


/**
 * 
 * -------------connect function----------------
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 */
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 