import axios from 'axios';

export function userSignUpRequest(userData) {
  return dispatch => {
    return axios.post('/api/v1/users', userData)
  }
}