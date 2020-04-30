import React, { Component } from 'react'

class Joke extends Component {
    upvote = event => {
        this.props.handleVote(this.props.id, 1)
    }

    downvote = event => {
        this.props.handleVote(this.props.id, -1)
    }

    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.upvote}></i>
                    <span>{this.props.votes}</span>
                    <i className='fas fa-arrow-down' onClick={this.downvote}></i>
                </div>
                <div className='Joke-text'>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Joke
