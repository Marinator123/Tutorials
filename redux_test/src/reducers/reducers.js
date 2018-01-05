// Reducers aktualisieren den State der Applikation
// basierend auf den zur Verfügung stehenden Actions

import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
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
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp