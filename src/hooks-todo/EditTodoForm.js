import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from '../hooks/useInputState'
import { TodosContext } from './contexts/todos.context'

function EditTodoForm({ task, id, toggleEditing }) {
    const { dispatch } = useContext(TodosContext)
    const [value, handleChange] = useInputState(task)

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'EDIT', id, task: value })
        toggleEditing()
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{ marginLeft: '1rem', width: '50%' }}
        >
            <TextField
                autoFocus
                margin='normal'
                fullWidth
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}

export default EditTodoForm
