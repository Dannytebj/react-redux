import axios from 'axios';

export function createEvent(event) {
  return dispatch => (
    axios.post('/api/v1/events', event)
  );
}

export function creee() {

};
