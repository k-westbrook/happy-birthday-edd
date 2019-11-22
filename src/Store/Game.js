// import axios from 'axios';
// import history from '../history'


/**
 * ACTION TYPES
 */
const SET_USER = 'SET_USER';
const VISIT_PAGE = 'VISIT_PAGE';

/**
 * INITIAL STATE
 */
//REMEMBER TO RETURN TO "" for userName
const gameState = {
  userName: "KAtie",
  visitedPages: new Array(2).fill(false)
};


/**
 * ACTION CREATORS
 */

export const setUser = (user) => ({ type: SET_USER, user })
export const visitPage = (pageNumber) => ({ type: VISIT_PAGE, pageNumber })
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
    case VISIT_PAGE:
      {
        let newVisited = [...state.visitedPages];
        newVisited[action.pageNumber] = true;
        return { ...state, visitedPages: newVisited }
      }
    default:
      return state
  }
}
