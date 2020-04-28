import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    state = {
        boxes: [
            { width: '10px', height: '20px', backgroundColor: 'magenta' }
        ]
    }

    createBox = ({ width, height, color }) => {
        this.setState(state => ({
            boxes: [...state.boxes, {
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color
            }]
        })
        )
    }

    render() {
        return (
            <div>
                <h1>Box Maker</h1>
                <NewBoxForm createBox={this.createBox} />
                {this.state.boxes.map(box => <Box key={uuidv4()} style={box} />)}
            </div>
        )
    }
}

export default BoxList
