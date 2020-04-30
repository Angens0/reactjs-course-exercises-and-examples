import React, { Component } from 'react'
import axios from 'axios'

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    state = {
        jokes: []
    }

    componentDidMount = async () => {
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
                joke: res.data.joke
            })
        }

        this.setState(state => ({
            jokes: [...state.jokes, ...jokes]
        }))
    }

    render = () => {
        return (
            <div className='JokeList'>
                <h1>Dad Jokes</h1>
                <div className='JokeList-jokes'>
                    {this.state.jokes.map(joke => (
                        <div key={joke.id}>{joke.joke}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
