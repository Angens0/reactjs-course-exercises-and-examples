import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
    state = {
        deck: null,
        drawn: []
    }

    async componentDidMount() {
        const deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
        this.setState({ deck: deck.data, drawn: [] })
    }

    getCard = async () => {
        const { deck_id } = this.state.deck
        const cardUrl = `${API_BASE_URL}/${deck_id}/draw/`
        try {
            const cardRes = await axios.get(cardUrl)
            if (!cardRes.data.success) {
                throw new Error('No card ramaining!')
            }

            const card = cardRes.data.cards[0]

            this.setState(state => ({
                drawn: [...state.drawn, {
                    id: card.code,
                    image: card.image,
                    name: `${card.value} of ${card.suit}`
                }]
            }))
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
                <div className='Deck-cardarea'>
                    {this.state.drawn.map(card =>
                        (<Card
                            key={card.id}
                            image={card.image}
                            name={card.name}
                        />)
                    )}
                </div>
            </div>
        )
    }
}

export default Deck
