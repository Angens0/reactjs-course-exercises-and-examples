import React from 'react'
import './App.css'
import Ball from './lotto/Ball'

function App() {
    return (
        <div className="App">
            <Ball num={5} />
            <Ball num={26} />
            <Ball num={12} />
            <Ball num={40} />
        </div>
    )
}

export default App
