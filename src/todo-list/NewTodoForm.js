import React, { Component } from 'react'

class NewTodoForm extends Component {
    state = {
        task: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTodo(this.state.task)
        this.setState({ task: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>
                <input
                    type='text'
                    placeholder='New Todo'
                    id='task'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default NewTodoForm
