import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoRedo from '../components/UndoRedo.jsx'

const mapStateToProps = (state) => ({
    canUndo: state.counter.past.length > 0,
    canRedo: state.counter.future.length > 0
  })

  const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
  })
  
  const UndoRedoHandler = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UndoRedo)
  
  export default UndoRedoHandler