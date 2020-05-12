import React, { Component } from 'react'
import Navbar from './context-demo/Navbar'
import Form from './context-demo/Form'
import PageContent from './context-demo/PageContent'
import { ThemeProvider } from './context-demo/contexts/ThemeContext'
import { LanguageProvider } from './context-demo/contexts/LanguageContext'

export class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <LanguageProvider>
                    <PageContent>
                        <Navbar />
                        <Form />
                    </PageContent>
                </LanguageProvider>
            </ThemeProvider>
        )
    }
}

export default App
