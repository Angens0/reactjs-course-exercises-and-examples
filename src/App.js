import React from 'react'
import './App.css'
import Lottery from './lotto/Lottery'

function App() {
    return (
        <div className="App">
            <Lottery />
            <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
            <Lottery />
        </div>
    )
}

export default App
