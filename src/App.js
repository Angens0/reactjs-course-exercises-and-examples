import React, { Component } from 'react'
import Navbar from './context-demo/Navbar'
import Form from './context-demo/Form'

export class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Form />
            </>
        )
    }
}

export default App
