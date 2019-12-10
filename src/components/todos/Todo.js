import React from 'react'

const Todo = props => {
    return (
        <div>
            <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
        </div>
    )
}

export default Todo;


// We're providing a definition for an anonymous function. Inside the definition, we're calling props.delete, and passing in the only other prop available, props.text