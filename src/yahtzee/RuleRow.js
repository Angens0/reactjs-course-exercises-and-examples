import React, { Component } from 'react'
import './RuleRow.css'

class RuleRow extends Component {
    render() {
        const { score, name, doScore, description } = this.props
        const isActive = score === undefined
        return (
            <tr
                className={`RuleRow RuleRow-${isActive ? 'active' : 'disabled'}`}
                onClick={isActive ? doScore : null}
            >
                <td className='RuleRow-name'>{name}</td>
                <td className='RuleRow-score'>{isActive ? description : score}</td>
            </tr>
        )
    }
}

export default RuleRow
