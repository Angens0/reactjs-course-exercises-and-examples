import React, { Component } from 'react'
import { choice } from './../utils/helpers'
import Box from './Box'
import './ColorBoxes.css'

class ColorBoxes extends Component {
    static defaultProps = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'brown'],
        nBoxes: 16
    }

    state = {
        boxes: Array.from({ length: this.props.nBoxes }).map((box, index) => ({
            id: index,
            prevColor: choice(this.props.colors),
            currColor: choice(this.props.colors)
        }))
    }

    changeColor = id => {
        const box = this.state.boxes[id]
        const { prevColor } = box
        const { colors } = this.props
        const availableColors = colors.filter(color => color !== prevColor)
        const newColor = choice(availableColors)

        this.setState(state => {
            const boxes = state.boxes.map(box => {
                if (box.id === id) {
                    box.prevColor = box.currColor
                    box.currColor = newColor
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
                    color={box.currColor}
                    changeColor={this.changeColor.bind(this, box.id)}
                />)}
            </div>
        )
    }
}

export default ColorBoxes
