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
        lotto: Array.from({ length: this.props.numBalls }, (v, k) => k + 1),
        test: new Array(this.props.maxNum - this.props.minNum + 1).fill(0)
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

    test = () => {
        const { numBalls, minNum, maxNum } = this.props
        const count = 10000
        for (let i = 0; i < count; i++) {
            const arr = getLottoArray(numBalls, minNum, maxNum)
            for (const el in arr) {
                this.setState((state) => ({
                    test: state.test.map((element, i) => {
                        if (i === arr[el] - 1) {
                            element++
                        }

                        return element
                    })
                }))
            }
        }
    }

    render() {
        const { title } = this.props
        const { numBalls, minNum, maxNum } = this.props
        const sum = this.state.test.reduce((prev, curr) => prev + curr, 0)
        const numberOfTests = Math.floor(sum / numBalls)
        const divStyle = { padding: '10px', border: 'solid 2px gray' }
        return (
            <section className="Lottery">
                <h1>{title}</h1>
                <div>
                    {this.state.lotto.map((num, i) => <Ball key={i} num={num} />)}
                </div>
                <button onClick={this.generate}>Generate</button>
                <button onClick={this.test}>test</button>
                <h1>{`Number of tests: ${numberOfTests}`}</h1>
                <h4>{`Expected probabiliy: ${numBalls / (maxNum - minNum + 1) * 100}%`}</h4>
                <div>
                    {this.state.test.map((num, i) => <div style={divStyle} key={i}>{`Number: ${i + 1}\nCount: ${num}\nChance: ${num / numberOfTests * 100}%`}</div>)}
                </div>
            </section>
        )
    }
}

export default Lottery
