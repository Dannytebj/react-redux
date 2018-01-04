import React, { Component } from 'react';
import Navigation from './Navigation';

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
        {this.props.children}
      </div>
    );
  }
}
export default App;
