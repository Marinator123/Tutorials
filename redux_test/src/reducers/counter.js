// Reducers aktualisieren den State der Applikation
// basierend auf den zur Verfügung stehenden Actions

import {
  INCREMENT,
  DECREMENT
} from '../actions/actions'

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

export default counter