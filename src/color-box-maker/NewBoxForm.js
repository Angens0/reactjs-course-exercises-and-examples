import React, { Component } from 'react'

class NewBoxForm extends Component {
    state = {
        width: '',
        height: '',
        color: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createBox(this.state)
        this.setState({
            width: '',
            height: '',
            color: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='width' />
                <input
                    type='text'
                    name='width'
                    id='width'
                    value={this.state.width}
                    onChange={this.handleChange} />
                <label htmlFor='height' />
                <input
                    type='text'
                    name='height'
                    id='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='color' />
                <input
                    type='text'
                    name='color'
                    id='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>Add a new box!</button>
            </form>
        )
    }
}

export default NewBoxForm
