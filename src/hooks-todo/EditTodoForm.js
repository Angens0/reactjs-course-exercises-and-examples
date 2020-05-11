import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from '../hooks/useInputState'

function EditTodoForm({ task, editTodo, id, toggleEditing }) {
    const [value, handleChange] = useInputState(task)

    const handleSubmit = event => {
        event.preventDefault()
        editTodo(id, value)
        toggleEditing()
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                margin='normal'
                fullWidth
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}

export default EditTodoForm
