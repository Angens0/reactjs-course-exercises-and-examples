import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Todo from './Todo'
import Divider from '@material-ui/core/Divider'
import { TodosContext } from './contexts/todos.context'

function TodoList(props) {
    const { todos } = useContext(TodosContext)

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
                        />
                        {i < todos.length - 1 && <Divider />}
                    </div>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
