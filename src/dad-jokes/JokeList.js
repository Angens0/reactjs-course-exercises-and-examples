import React, { Component } from 'react'
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke'

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    state = {
        jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]')
    }

    componentDidMount = async () => {
        if (!this.state.jokes.length) this.getJokes()
    }

    getJokes = async () => {
        const jokes = []
        while (jokes.length < this.props.numJokesToGet) {
            const res = await axios.get('https://icanhazdadjoke.com/',
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            )

            jokes.push({
                id: res.data.id,
                text: res.data.joke,
                votes: 0
            })
        }

        this.setState(state => ({
            jokes: [...state.jokes, ...jokes]
        }), () => window.localStorage.setItem(
            'jokes',
            JSON.stringify(this.state.jokes)
        ))
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
        })
    }

    render = () => {
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
                    <button className='JokeList-getmore'>New Jokes</button>
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
