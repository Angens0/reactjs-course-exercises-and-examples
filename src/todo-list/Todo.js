import React, { Component } from 'react'

class Todo extends Component {
    render() {
        const { task } = this.props

        return (
            <div>
                <button>Edit</button>
                <button>X</button>
                <li>{task}</li>
            </div>
        )
    }
}

export default Todo
