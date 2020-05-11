import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Todo from './Todo'
import Divider from '@material-ui/core/Divider'

function TodoList({ todos, toggleTodo, editTodo, removeTodo }) {
    if (!todos.length) {
        return null
    }

    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <div key={todo.id}>
                        <Todo
                            key={todo.id}
                            {...todo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                            removeTodo={removeTodo}
                        />
                        {i < todos.length - 1 && <Divider />}
                    </div>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
