import axios from 'axios';
import history from '../history'




/**
 * ACTION TYPES
 */
const ADD_USER = 'ADD_USER';
const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

/**
 * INITIAL STATE
 */
const userObject = {};


/**
 * ACTION CREATORS
 */

const addUser = (user) => ({ type: ADD_USER, user })
const getUser = user => ({ type: GET_USER, user })
const logout = () => ({ type: LOGOUT_USER })





/**
 * REDUCER
 */
export default function (state = userObject, action) {
  switch (action.type) {
    case ADD_USER:
      return action.user
    case GET_USER:
      return action.user;
    case LOGOUT_USER:
      return userObject
    default:
      return state
  }
}
