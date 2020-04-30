import React, { Component } from 'react'
import './Joke.css'

const clamp = (min, max, value) => Math.min(Math.max(value, min), max)

class Joke extends Component {
    getColor = () => {
        const { votes } = this.props
        const factor = 255 / 15

        const greenValue = Math.ceil(clamp(100, 255, votes * factor))
        const redValue = Math.ceil(clamp(100, 255, -votes * factor))

        return `rgba(${redValue}, ${greenValue}, 100, 1)`
    }

    getEmoji = () => {
        const { votes } = this.props
        if (votes >= 15) {
            return { emoji: '🤣', label: 'emoji-rofl' }
        } else if (votes >= 12) {
            return { emoji: '😆', label: 'emoji-laughing' }
        } else if (votes >= 9) {
            return { emoji: '😊', label: 'emoji-smiley' }
        } else if (votes >= 6) {
            return { emoji: '🙂', label: 'emoji-slightly-smiling-face' }
        } else if (votes >= 3) {
            return { emoji: '😐', label: 'emoji-neutral-face' }
        } else if (votes >= 0) {
            return { emoji: '😕', label: 'emoji-confused' }
        } else {
            return { emoji: '😠', label: 'emoji-angry' }
        }
    }

    upvote = event => {
        this.props.handleVote(this.props.id, 1)
    }

    downvote = event => {
        this.props.handleVote(this.props.id, -1)
    }

    render() {
        const emoji = this.getEmoji()
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.upvote} />
                    <span
                        style={{ borderColor: this.getColor() }}
                        className='Joke-votes'
                    >
                        {this.props.votes}
                    </span>
                    <i className='fas fa-arrow-down' onClick={this.downvote} />
                </div>

                <div className='Joke-text'>
                    {this.props.text}
                </div>

                <div className='Joke-smiley'>
                    <span role='img' aria-label={emoji.label}>{emoji.emoji}</span>
                </div>
            </div>
        )
    }
}

export default Joke
