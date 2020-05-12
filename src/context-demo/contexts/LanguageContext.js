import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()

export class LanguageProvider extends Component {
    state = {
        language: 'spanish'
    }

    changeLanguage = (event) => {
        this.setState({ language: event.target.value })
    }

    render() {
        const { state, changeLanguage } = this
        return (
            <LanguageContext.Provider value={{ ...state, changeLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
)
