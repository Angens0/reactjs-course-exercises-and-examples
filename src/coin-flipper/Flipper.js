import React, { Component } from 'react'
import { choice } from './../utils/helpers'
import Coin from './Coin'

class Flipper extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
            { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
        ]
    }

    state = {
        currCoin: null,
        nHeads: 0,
        nTails: 0
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins)
        this.setState(state => {
            return {
                currCoin: newCoin,
                nHeads: state.nHeads + newCoin.side === 'heads' ? 1 : 0,
                nTails: state.nTails + newCoin.side === 'tails' ? 1 : 0
            }
        })
    }

    handleClick = event => this.flipCoin()

    render() {
        const { currCoin, nHeads, nTails } = this.state
        return (
            <div className="Flipper">
                <h2>Let's flip a coin!</h2>
                {currCoin && <Coin info={currCoin} />}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>
                    Out of {nHeads + nTails} flips, there
                    have been {nHeads} heads and {nTails} tails
                </p>
            </div>
        )
    }
}

export default Flipper
