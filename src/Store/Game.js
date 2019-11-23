// import axios from 'axios';
// import history from '../history'
import { visitedPages } from './VisitedPages'

/**
 * ACTION TYPES
 */
const SET_USER = 'SET_USER';
const VISIT_PAGE = 'VISIT_PAGE';
const END_GAME_BAD = 'END_GAME_BAD';
const ANSWER_QUIZ = 'ANSWER_QUIZ';

/**
 * INITIAL STATE
 */
//REMEMBER TO RETURN TO "" for userName
const gameState = {
  userName: "Katie",
  totalPages: 8,
  visitedPages: visitedPages,
  quizAnswer: ""

};


/**
 * ACTION CREATORS
 */

export const setUser = (user) => ({ type: SET_USER, user })
export const visitPage = (pageNumber) => ({ type: VISIT_PAGE, pageNumber })
export const endGameBad = () => ({ type: END_GAME_BAD })
export const setQuizAnswer = (answer) => ({ type: ANSWER_QUIZ, answer })
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
        return { ...state, visitedPages: newVisited, userName: action.user }
      }
    case VISIT_PAGE:
      {
        let newVisited = [...state.visitedPages];
        newVisited[action.pageNumber].visited = true;
        return { ...state, visitedPages: newVisited }
      }
    case END_GAME_BAD:
      {
        let newVisited = [...visitedPages];

        for (let i = 0; i < newVisited.length; i++) {
          newVisited[i].visited = false;
        }
        return {
          ...state, visitedPages: newVisited, userName: ""
        }
      }
    case ANSWER_QUIZ:
      {
        let newVisited = [...visitedPages];
        newVisited[1].visited = true;
        return { ...state, quizAnswer: action.answer }
      }
    default:
      return state
  }
}
