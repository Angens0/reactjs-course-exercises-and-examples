import React, { Component } from 'react'
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke'

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    state = {
        jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
        loading: false
    }

    seenJokes = new Set(this.state.jokes.map(joke => joke.id))

    componentDidMount = async () => {
        if (!this.state.jokes.length) this.getJokes()
    }

    getJokes = async () => {
        try {
            const jokes = []
            while (jokes.length < this.props.numJokesToGet) {
                const res = await axios.get('https://icanhazdadjoke.com/',
                    {
                        headers: {
                            Accept: 'application/json'
                        }
                    }
                )

                const newJoke = {
                    id: res.data.id,
                    text: res.data.joke,
                    votes: 0
                }

                if (!this.seenJokes.has(newJoke.id)) {
                    this.seenJokes.add(newJoke.id)
                    jokes.push(newJoke)
                }
            }

            this.setState(state => ({
                jokes: [...state.jokes, ...jokes],
                loading: false
            }), () => window.localStorage.setItem(
                'jokes',
                JSON.stringify(this.state.jokes)
            ))
        } catch (error) {
            alert(error)
            this.setState({ loading: false })
        }
    }

    handleVote = (id, delta) => {
        this.setState(state => {
            return {
                jokes: state.jokes.map(joke => {
                    if (joke.id === id) {
                        return { ...joke, votes: joke.votes + delta }
                    }

                    return joke
                })
            }
        }, () => window.localStorage.setItem(
            'jokes',
            JSON.stringify(this.state.jokes)
        ))
    }

    handleClick = event => {
        this.setState({ loading: true }, this.getJokes)
    }

    renderSpinner = () => {
        return (
            <div className='JokeList-spinner'>
                <i className='far fa-8x fa-laugh fa-spin' />
                <h1 className='JokeList-title'>Loading...</h1>
            </div>
        )
    }

    render = () => {
        if (this.state.loading) {
            return this.renderSpinner()
        }

        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'>
                        <span>Dad</span> Jokes
                    </h1>
                    <img
                        alt='😂'
                        src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
                    />
                    <button
                        className='JokeList-getmore'
                        onClick={this.handleClick}
                    >
                        New Jokes
                    </button>
                </div>

                <div className='JokeList-jokes'>
                    {this.state.jokes.map(joke => (
                        <Joke
                            key={joke.id}
                            id={joke.id}
                            votes={joke.votes}
                            text={joke.text}
                            handleVote={this.handleVote}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
