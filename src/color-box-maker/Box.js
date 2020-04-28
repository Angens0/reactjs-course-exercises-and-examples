import React, { Component } from 'react'

class Box extends Component {
    handleClick = event => this.props.removeBox(this.props.id)

    render() {
        return (
            <div>
                <div style={this.props.style}></div>
                <button onClick={this.handleClick}>Remove</button>
            </div>
        )
    }
}

export default Box
