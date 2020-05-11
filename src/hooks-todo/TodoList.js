import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Todo from './Todo'

function TodoList({ todos, toggleTodo, editTodo, removeTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
