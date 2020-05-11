import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

function Todo({ id, task, completed, toggleTodo, removeTodo }) {
    const remove = () => {
        removeTodo(id)
    } 

    const toggle = () => {
        toggleTodo(id)
    }

    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={toggle} />
            <ListItemText
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <EditIcon aria-label='Edit' />
                </IconButton>
                <IconButton onClick={remove}>
                    <DeleteIcon aria-label='Delete'/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo
