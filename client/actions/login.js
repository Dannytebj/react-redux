import axios from 'axios';

export function login(loginDteails) {
  return dispatch => (
    axios.post('api/v1/user/auth', loginDteails)
  )
}