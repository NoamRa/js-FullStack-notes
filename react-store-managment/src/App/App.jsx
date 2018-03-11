import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css'

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AccountManager } from '../AccountManager';

import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import MyStore from '../MyStore/MyStore.jsx'

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        console.log("dispatch in App ctor", dispatch);

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.state = {isLoggedIn: false};
    }

    routHandler(x) {
        // console.log("Route props as x", x);
        return (
            localStorage.getItem('user')
                ? <HomePage {...x} />
                : <Redirect to={{ pathname: '/login', state: { from: x.location } }} />
        )
    };

    setIsLoggedIn = () => {
      this.setState({ isLoggedIn : !!localStorage.getItem('user') })
    }

    componentDidMount() {
      this.setIsLoggedIn();
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>

                        }
                        <div className="page-header">
                            <Header isLoggedIn={this.state.isLoggedIn}/>
                        </div>
                        <main>
                          <Router history={console.log("history", history) || history}>
                              <div>
                                  <Route exact path="/" render={this.routHandler} />
                                  <Route path="/login" component={LoginPage} />
                                  <Route path="/register" component={RegisterPage} />
                                  <Route path="/account" component={AccountManager} />
                                  <Route path="/my-store" component={MyStore} />
                              </div>
                          </Router>
                        </main>
                        <div className="page-footer">
                            <Footer/>
                        </div>
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

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 