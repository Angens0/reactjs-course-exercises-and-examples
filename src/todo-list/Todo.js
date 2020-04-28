import React, { Component } from 'react'

class Todo extends Component {
    handleRemove = event => {
        this.props.removeTodo(this.props.id)
    }

    render() {
        const { task } = this.props

        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{task}</li>
            </div>
        )
    }
}

export default Todo
