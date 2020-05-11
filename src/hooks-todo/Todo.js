import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import useToggleState from '../hooks/useToggleState'
import EditTodoForm from './EditTodoForm'

function Todo({ id, task, completed, toggleTodo, editTodo, removeTodo }) {
    const [isEditing, toggleEditing] = useToggleState()
    
    const remove = () => {
        removeTodo(id)
    } 

    const toggleCompletion = () => {
        toggleTodo(id)
    }

    const renderTodo = () => (
        <>
            <Checkbox tabIndex={-1} checked={completed} onClick={toggleCompletion} />
            <ListItemText
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={toggleEditing}>
                    <EditIcon aria-label='Edit' />
                </IconButton>
                <IconButton onClick={remove}>
                    <DeleteIcon aria-label='Delete' />
                </IconButton>
            </ListItemSecondaryAction>
        </>
    )

    const renderEditing = () => (
        <EditTodoForm
            task={task}
            editTodo={editTodo}
            id={id}
            toggleEditing={toggleEditing}
        />
    )

    return (
        <ListItem>
            {isEditing ? renderEditing() : renderTodo()}
        </ListItem>
    )
}

export default Todo
