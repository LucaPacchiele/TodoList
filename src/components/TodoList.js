import React, { useContext, useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import TodoAddCard from './TodoAddCard'


import useTodo from '../hook/useTodo'

import { AppContext } from '../context/AppContext'

const TodoList = () => {
  const { todos, orderTodo } = useContext(AppContext)
  const { totTodos, totTodo, totDone, totOngoing } = useTodo()
  const [filterTodo, setFilterTodo] = useState("all")

  const checkFilter = (todo) => {
    if (filterTodo === "all") {
      return true
    }
    if (todo.completed === "todo" && filterTodo === "todo") {
      return true
    }
    if (todo.completed === "done" && filterTodo === "done") {
      return true
    }
    if (todo.completed === "ongoing" && filterTodo === "ongoing") {
      return true
    }
    return false
  }

  useEffect(() => {

  }, [totTodo()])


  return (
    <div className="TodoListContainer">

      <h1>Todo List</h1>

      <TodoAddCard />

      <div className="TodoMenu d-flex s-around">
        <div className="">
          <div>ID</div>
          <div className="d-flex">
            <button onClick={() => { orderTodo("id", "asc") }}><i className="fa fa-angle-up"></i></button>
            <button onClick={() => { orderTodo("id", "disc") }}><i className="fa fa-angle-down"></i></button>
          </div>
        </div>
        <div className="">
          <div>Title</div>
          <div className="d-flex"><button onClick={() => { orderTodo("completed", "asc") }}>asc</button>
            <button onClick={() => { orderTodo("completed", "disc") }}>disc</button>
          </div>
        </div>

        <div className="">
          <div>Completed</div>
          <div>
            <select className="TodoCardSelect" value={filterTodo} onChange={(e) => { setFilterTodo(e.target.value) }} >
              <option value="todo">TODO ({totTodo})</option>
              <option value="done">DONE ({totDone})</option>
              <option value="ongoing">ONGOING ({totOngoing})</option>
              <option value="all">ALL ({totTodos})</option>
            </select>
          </div>
        </div>
      </div>

      {totTodo() > 0 ?

        <div className="TodoList">
          {todos.map(todo => (
            <div key={todo.id} >

              {checkFilter(todo) && <TodoCard todo={todo} />}

            </div>
          ))
          }
        </div>

        :

        <div className="TodoCard">
          Non vi sono elementi
        </div>

      }
    </div>

  )

}

export default TodoList

