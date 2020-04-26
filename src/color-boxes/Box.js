import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    render() {
        const { color, changeColor } = this.props

        return (
            <div
                onClick={changeColor}
                style={{ backgroundColor: color }}
                className="Box"
            >

            </div>
        )
    }
}

export default Box
