import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    static defaultProps = {
        numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick(this.props.idx)
    }



    render() {
        const { locked, val, numberWords, disabled } = this.props
        const classNames = [
            'Die',
            'fas',
            `fa-dice-${numberWords[val - 1]}`,
            'fa-5x',
            locked ? 'Die-locked' : ''
        ]
        return (
            <i
                className={classNames.join(' ')}
                onClick={this.handleClick}
                disabled={disabled}
            />
        )
    }
}

export default Die
