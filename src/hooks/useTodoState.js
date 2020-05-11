import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos)
    
    const addTodo = newTodoText => {
        setTodos([...todos, {
            id: uuidv4(),
            task: newTodoText,
            completed: false
        }])
    }
    
    const toggleTodo = id => setTodos(todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    }))
    
    const editTodo = (id, task) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task } : todo))
    }
    
    const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id))

    return {
        todos,
        addTodo,
        toggleTodo,
        editTodo,
        removeTodo
    }
}
