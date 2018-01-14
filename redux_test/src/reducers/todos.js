import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  INCREMENT,
  DECREMENT,
  VisibilityFilters
} from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// Gibt tatsächlich an was passiert bei den Actions von Counter
function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// STATE IST HIER NUR SUBTEIL VON APPLIKATIONSSTATE
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
          // neue action wird zu state hinzugefügt
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      // falls index übereinstimmt mit gewünschter action
      // setze diese auf !completed
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// useful for “splitting” the root 
// reducer into separate functions that each manage one branch of the state tree.
// branch = parentobjekt in diesem fall alle todos / current visibilityfilter
// gesamter applikationsstate wird hier zusammengefügt
// Anhand von ActionId wird automatisch die richtige Action ausgewählt mithilfe des Reducers!
export default todos