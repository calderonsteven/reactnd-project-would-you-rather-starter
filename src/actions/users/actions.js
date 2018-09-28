import * as API from './../../data/_DATA'

import {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  userLogin,
  userLogout
} from './actionCreators'

export function handleGetUsers() {
  return (dispatch) => {
    dispatch(getUsersRequest());
    return API._getUsers()
      .then((users) => {
        dispatch(getUsersSuccess(users))
      })
      .catch(() => {
        dispatch(getUsersError());
      })
  }
}

export function handleUserLogin(user) {
  return (dispatch) => {
    dispatch(userLogin(user));
  }
}

export function handleUserLogout() {
  return (dispatch) => {
    dispatch(userLogout());
  }
}
