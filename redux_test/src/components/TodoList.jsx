import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.jsx'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    // Attributnamen stehen in todo schon drin, darum klappt das!!
                    // -> genial
                    <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
                ))}
            </ul>
        )
    }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList