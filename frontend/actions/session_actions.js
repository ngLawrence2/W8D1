import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then( () => dispatch(logoutCurrentUser()))
);
