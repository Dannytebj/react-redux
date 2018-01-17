import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createEvent } from '../../actions/eventActions';
import TextFields from '../../components/commons/TextFields';

/**
 *
 *
 * @export
 * @class EventForm
 * @extends {Component}
 */
class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   *
   * @returns {void}
   * @param {any} event
   * @memberof LoginForm
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  /**
   *
   * @returns {void}
   * @param {any} event
   * @memberof LoginForm
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.createEvent(this.state);
  }
  render() {
    const { title, errors, isLoading } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h1>Create a New EventForm</h1>
          <TextFields
            label="Title"
            error={errors.title}
            placeholder="Title of Event"
            onChange={this.onChange}
            value={title}
            id="title"
            field="title"
          />
          <button disabled={isLoading} type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    );
  }
}
EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
};
export default connect(null, { createEvent })(EventForm);

