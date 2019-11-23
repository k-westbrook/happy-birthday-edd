// import axios from 'axios';
// import history from '../history'
import { visitedPages } from './VisitedPages'

/**
 * ACTION TYPES
 */
const SET_USER = 'SET_USER';
const VISIT_PAGE = 'VISIT_PAGE';
const END_GAME = 'END_GAME';


/**
 * INITIAL STATE
 */
//REMEMBER TO RETURN TO "" for userName
const gameState = {
  userName: "Katie",
  totalPages: 5,
  visitedPages: visitedPages

};


/**
 * ACTION CREATORS
 */

export const setUser = (user) => ({ type: SET_USER, user })
export const visitPage = (pageNumber) => ({ type: VISIT_PAGE, pageNumber })
export const endGame = () => ({ type: END_GAME })
// const logout = () => ({ type: LOGOUT_USER })



/**
 * REDUCER
 */
export default function (state = gameState, action) {
  switch (action.type) {
    case SET_USER:
      {
        let newVisited = [...state.visitedPages];
        newVisited[0].visited = true;
        newVisited[1].visited = true;
        return { ...state, visitedPages: newVisited, userName: action.user }
      }
    case VISIT_PAGE:
      {
        let newVisited = [...state.visitedPages];
        newVisited[action.pageNumber].visited = true;
        return { ...state, visitedPages: newVisited }
      }
    case END_GAME:
      return state;
    default:
      return state
  }
}
