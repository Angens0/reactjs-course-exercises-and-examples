import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export class TodoList extends Component {
    state = {
        todos: [
            { task: 'Walk The Fish', id: uuidv4() },
            { task: 'Groom Chickens', id: uuidv4() }
        ]
    }

    createTodo = task => {
        this.setState(state => {
            return { todos: [...state.todos, { task, id: uuidv4() }] }
        })
    }

    renderTodos = () => {
        return this.state.todos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
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
