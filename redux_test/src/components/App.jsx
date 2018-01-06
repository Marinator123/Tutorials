import React from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CounterHandler from '../containers/CounterHandler'

class App extends React.Component {
    render() {
        return(
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <CounterHandler />
            </div>
        )
    }
}

export default App