import React, { Component } from 'react'
import getLottoArray from './../utils/getLottoArray'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lottery',
        numBalls: 6,
        minNum: 1,
        maxNum: 40
    }

    state = {
        lotto: Array.from({ length: this.props.numBalls }, (v, k) => k + 1)
    }

    generate = () => {
        this.setState({
            lotto: getLottoArray(
                this.props.numBalls,
                this.props.minNum,
                this.props.maxNum
            )
        })
    }

    render() {
        const { title } = this.props
        return (
            <section className="Lottery">
                <h1>{title}</h1>
                <div>
                    {this.state.lotto.map((num, i) => <Ball key={i} num={num} />)}
                </div>
                <button onClick={this.generate}>Generate</button>
            </section>
        )
    }
}

export default Lottery
