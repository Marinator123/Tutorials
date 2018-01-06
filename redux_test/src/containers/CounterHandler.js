import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/actions'
import Counter from '../components/Counter.jsx'


// Hier gebe ich an, wie sich die Properties ändern
// anhand des State, wenn eine Funktion ausgeführt der Klasse
const mapStateToProps = state => {
    return {
        value: state.counter
    }
  }
  
  // Hier sagt man welche Funktion ausgeführt wird, wenn 
  // die Action onIncrement / onDecrement ausgeführt wird
  const mapDispatchToProps = dispatch => {
    return {
      onIncrement: () => {
        dispatch( incrementCounter() )
      },
      onDecrement: () => {
        dispatch( decrementCounter() )
      }
    }
  }
  
  // connect handled eigenständig die dispatch / subscribe Methodik von redux
  const CounterHandler = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)

  export default CounterHandler