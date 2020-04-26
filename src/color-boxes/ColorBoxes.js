import React, { Component } from 'react'
import { choice } from './../utils/helpers'
import Box from './Box'
import './ColorBoxes.css'

class ColorBoxes extends Component {
    static defaultProps = {
        allColors: ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'brown', 'magenta'],
        nBoxes: 16
    }

    state = {
        boxes: Array.from({ length: this.props.nBoxes }).map((box, index) => ({
            id: index,
            color: choice(this.props.allColors)
        }))
    }

    changeColor = id => {
        const box = this.state.boxes[id]
        const { allColors } = this.props
        const availableColors = allColors.filter(color => color !== box.color)
        const newColor = choice(availableColors)

        this.setState(state => {
            const boxes = state.boxes.map(box => {
                if (box.id === id) {
                    box.color = newColor
                }

                return box
            })
            return { boxes }
        })
    }

    render() {
        return (
            <div className="ColorBoxes">
                {this.state.boxes.map(box => <Box
                    key={box.id}
                    color={box.color}
                    changeColor={this.changeColor.bind(this, box.id)}
                />)}
            </div>
        )
    }
}

export default ColorBoxes
