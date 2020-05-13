import { v4 as uuidv4 } from 'uuid'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return addTodo(state, action)
        case 'TOGGLE':
            return toggleTodo(state, action)
        case 'EDIT':
            return editTodo(state, action)
        case 'REMOVE':
            return removeTodo(state, action)
        default:
            return state
    }
}

const addTodo = (state, { task, completed = false }) => {
    return [...state, { id: uuidv4(), task, completed }]
}

const toggleTodo = (state, { id }) => {
    return state.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
}

const editTodo = (state, { id, task }) => {
    return state.map(todo => todo.id === id ? { ...todo, task } : todo)
}

const removeTodo = (state, { id }) => {
    return state.filter(todo => todo.id !== id)
}

export default reducer
