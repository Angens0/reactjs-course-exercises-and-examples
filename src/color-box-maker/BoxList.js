import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    state = { boxes: [] }

    createBox = ({ width, height, color }) => {
        this.setState(state => ({
            boxes: [...state.boxes, {
                id: uuidv4(),
                style: {
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: color
                }
            }]
        }))
    }

    removeBox = id => {
        this.setState(state => ({
            boxes: state.boxes.filter(box => box.id !== id)
        }))
    }

    render() {
        return (
            <div>
                <h1>Box Maker</h1>
                <NewBoxForm createBox={this.createBox} />
                {this.state.boxes.map(box => {
                    return (
                        <div>
                            <Box key={box.id} style={box.style} />
                            <button
                                onClick={this.removeBox.bind(this, box.id)}
                            >
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BoxList
