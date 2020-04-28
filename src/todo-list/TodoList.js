import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export class TodoList extends Component {
    state = {
        todos: []
    }

    createTodo = newTodo => {
        this.setState(state => {
            return { todos: [...state.todos, newTodo] }
        })
    }

    removeTodo = id => {
        this.setState(state => {
            return { todos: state.todos.filter(todo => todo.id !== id) }
        })
    }

    renderTodos = () => {
        return this.state.todos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            removeTodo={this.removeTodo}
        />)
    }

    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.createTodo} />
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}

export default TodoList
