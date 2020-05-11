import React, { useEffect } from 'react'
import useTodoState from '../hooks/useTodoState'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || []

    const {
        todos,
        addTodo,
        toggleTodo,
        editTodo,
        removeTodo
    } = useTodoState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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
                        editTodo={editTodo}
                        removeTodo={removeTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp
