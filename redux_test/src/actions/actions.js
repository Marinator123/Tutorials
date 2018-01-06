// Actions beschreiben, dass etwas was passiert ist
// nicht wie die Applikation darauf reagieren soll

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// NUR Konstanten
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/*
 * other constants
 */
// keine ahnung wo die benutzt werden
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
// neuen Task hinzufügen
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

// ein task als "komplett" abhaken
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

// Wechsel der zurzeit sichtbaren Tasks
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

// gibt den Typ der Action an 
export function incrementCounter() {
  return { type: INCREMENT }
}

export function decrementCounter() {
  return { type: DECREMENT }
}