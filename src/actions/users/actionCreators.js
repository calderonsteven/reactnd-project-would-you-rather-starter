import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
} from './actionTypes'

export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
  }
}

export function getUsersSuccess(payload) {
  return {
    type: GET_USERS_SUCCESS,
    payload,
  }
}

export function getUsersError() {
  return {
    type: GET_USERS_ERROR,
  }
}

export function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload,
  }
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  }
}
