import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class NewTodoForm extends Component {
    state = {
        task: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTodo({
            task: this.state.task,
            id: uuidv4(),
            isCompleted: false
        })
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
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm
