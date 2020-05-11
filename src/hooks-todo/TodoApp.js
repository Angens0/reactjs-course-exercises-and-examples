import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Clean Fishtank', completed: false },
        { id: 2, task: 'Wash Car', completed: true },
        { id: 3, task: 'Grow Beard', completed: false }
    ]

    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTodoText => {
        setTodos([...todos, {
            id: uuidv4(),
            task: newTodoText,
            completed: false
        }])
    }

    const toggleTodo = id => setTodos(todos.map(todo => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo
    }))

    const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id))

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp
