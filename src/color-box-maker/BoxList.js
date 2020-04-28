import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Box from './Box'

class BoxList extends Component {
    state = {
        boxes: [
            { width: '10px', height: '20px', backgroundColor: 'magenta' }
        ]
    }

    render() {
        return (
            <div>
                <h1>Box Maker</h1>
                {this.state.boxes.map(box => <Box key={uuidv4()} style={box} />)}
            </div>
        )
    }
}

export default BoxList
