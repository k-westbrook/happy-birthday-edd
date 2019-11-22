import axios from 'axios';
import history from '../history'


/**
 * ACTION TYPES
 */
const SET_USER = 'SET_USER';


/**
 * INITIAL STATE
 */
const gameState = {};


/**
 * ACTION CREATORS
 */

const setUser = (user) => ({ type: SET_USER, user })
// const getUser = user => ({ type: GET_USER, user })
// const logout = () => ({ type: LOGOUT_USER })



/**
 * REDUCER
 */
export default function (state = gameState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user }
    default:
      return state
  }
}
