import React, { Component } from 'react';
import Navigation from './Navigation';
import FlashMessageList from '../components/flash/FlashMessageList';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   *
   *
   * @returns {void}
   * @memberof App
   */
  render() {
    return (
      <div>
        <Navigation />
        <FlashMessageList />
        {this.props.children}
      </div>
    );
  }
}
export default App;
