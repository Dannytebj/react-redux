import axios from 'axios';
import jwt from 'jsonwebtoken';
import SetAuthToken from '../utils/SetAuthToken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    SetAuthToken(false);
    dispatch(setCurrentUser({}));
  };
}
export function login(loginDteails) {
  return dispatch => (
    axios.post('api/v1/user/auth', loginDteails)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        SetAuthToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
      })
  );
}
