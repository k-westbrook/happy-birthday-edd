// import axios from 'axios';
// import history from '../history'


/**
 * ACTION TYPES
 */
const SET_USER = 'SET_USER';


/**
 * INITIAL STATE
 */
const gameState = {
  userName: "",
  visitedPages: new Array(1).fill(false)
};


/**
 * ACTION CREATORS
 */

export const setUser = (user) => ({ type: SET_USER, user })
// const getUser = user => ({ type: GET_USER, user })
// const logout = () => ({ type: LOGOUT_USER })



/**
 * REDUCER
 */
export default function (state = gameState, action) {
  switch (action.type) {
    case SET_USER:
      {
        let newVisited = [...state.visitedPages];
        newVisited[0] = true;
        return { ...state, visitedPages: newVisited, userName: action.user }
      }
    default:
      return state
  }
}
