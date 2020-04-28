import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    state = {
        isEditing: false,
        task: this.props.task
    }

    handleRemove = event => {
        this.props.removeTodo(this.props.id)
    }

    toggleForm = () => {
        this.setState(state => ({ isEditing: !state.isEditing }))
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleUpdate = event => {
        event.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.toggleForm()
    }

    handleToggle = event => {
        event.preventDefault()
        this.props.toggleTodoCompletion(this.props.id)
    }

    renderForm = () => {
        return (
            <form onSubmit={this.handleUpdate}>
                <input
                    type='text'
                    name='task'
                    onChange={this.handleChange}
                    value={this.state.task}
                />
                <button>Save</button>
            </form>
        )
    }

    renderTodo = () => {
        const { isCompleted, task } = this.props

        return (
            <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li
                    onClick={this.handleToggle}
                    className={isCompleted ? 'completed' : ''}
                >
                    {task}
                </li>
            </div>
        )
    }

    render() {
        return this.state.isEditing ? this.renderForm() : this.renderTodo()
    }
}

export default Todo
