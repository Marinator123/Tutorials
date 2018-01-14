import React from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CounterHandler from '../containers/CounterHandler'
import UndoRedoHandler from '../containers/UndoRedoHandler'
class App extends React.Component {
    render() {
        return(
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <CounterHandler/>
                <UndoRedoHandler/>
            </div>
        )
    }
}

export default App