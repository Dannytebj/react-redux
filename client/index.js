import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import Welcome from './components/Welcome';
import Players from './components/Players';
import SignUpPage from './components/signUp/SignUpPage';
import './styles/styles.scss';

const store = createStore(
  (state={}) => state,
  applyMiddleware(thunk)
);
const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/players" component={Players} />
        <Route path="/signUp" component={SignUpPage} />
      </Switch>
    </App>
  </BrowserRouter>
);
render(
  <Provider store={store}>
  <Routes />
  </Provider>,
  document.getElementById('app'));
