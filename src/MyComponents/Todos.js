import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

    let mystyle = {
        minHeight: "70vh",
        overflow: "auto",
        marginLeft: "15px"
    }

    return (
        <div className="conatiner my-3" style={mystyle
        } >
            <h3 className=" my-3" >Todos List</h3>
            {/* {props.todos}  */}
            {props.todos.length === 0 ? "No todo is here" :
                props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
