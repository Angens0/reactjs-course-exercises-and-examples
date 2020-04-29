import React, { Component } from 'react'
import axios from 'axios'

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

class Deck extends Component {
    state = {
        deck: null
    }

    async componentDidMount() {
        const deck = await axios.get(API_URL)
        this.setState({ deck: deck.data })
    }

    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
            </div>
        )
    }
}

export default Deck
