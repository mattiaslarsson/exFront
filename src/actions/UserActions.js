import * as types from './ActionTypes';

export const doLogin = (username, password) => {
  return {
      type: types.DO_LOGIN,
      username,
      password
  }
};

export const doLogout = () => {
    return {
        type: types.DO_LOGOUT
    }
};

