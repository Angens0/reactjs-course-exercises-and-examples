import { useState, useEffect } from 'react'

const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        let value

        try {
            value = JSON.parse(
                window.localStorage(key) || String(defaultValue)
            )
        } catch (error) {
            value = defaultValue
        }

        return value
    })

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [state, key])

    return [state, setState]
}

export default useLocalStorageState
