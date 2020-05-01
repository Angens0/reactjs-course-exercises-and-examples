import React, { Component } from 'react'
import Routes from './dogs/Routes'
import Navbar from './dogs/Navbar'
import hazel from './img/hazel.jpg'
import tubby from './img/tubby.jpg'
import whiskey from './img/whiskey.jpg'
import './App.css'

class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: whiskey,
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!"
                ]
            },
            {
                name: "Hazel",
                age: 3,
                src: hazel,
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs."
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: tubby,
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food."
                ]
            }
        ]
    }

    render() {
        return (
            <div>
                <Navbar dogs={this.props.dogs} />
                <Routes dogs={this.props.dogs} />
            </div>
        )
    }
}

export default App
