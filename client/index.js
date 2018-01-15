import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appHistory from './utils/AppHistory';
import rootReducer from './rootReducer';
import App from './components/App';
import Welcome from './components/Welcome';
import DashBoard from './components/DashBoard';
import SignUpPage from './components/signUp/SignUpPage';
import LoginPage from './components/login/LoginPage';
import './styles/styles.scss';

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f 
  )
);
const Routes = () => (
  <Router history={appHistory}>
    <App>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />

      </Switch>
    </App>
  </Router>
);
render(
  <Provider store={store}>
  <Routes />
  </Provider>,
  document.getElementById('app'));
