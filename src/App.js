import React, { Component } from 'react'
import Navbar from './context-demo/Navbar'
import Form from './context-demo/Form'
import PageContent from './context-demo/PageContent'
import { ThemeProvider } from './context-demo/contexts/ThemeContext'

export class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <PageContent>
                    <Navbar />
                    <Form />
                </PageContent>
            </ThemeProvider>
        )
    }
}

export default App
