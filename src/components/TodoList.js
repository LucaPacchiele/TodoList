import React, { useContext, useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import TodoAddCard from './TodoAddCard'


import useTodo from '../hook/useTodo'

import { AppContext } from '../context/AppContext'

const TodoList = () => {
  const { todos, orderTodo } = useContext(AppContext)
  const { totTodos, totTodo, totDone, totOngoing, totTitleSearch } = useTodo()
  const [filterTodo, setFilterTodo] = useState("all")
  const [searchText, setSearchText] = useState("")

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

  const checkSearch = (todo) => {
    if (todo.title.includes(searchText)) return true
    return false
  }

  useEffect(() => {
    console.log(totTitleSearch(searchText))
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
          <div>Completed</div>
          <div className="d-flex"><button onClick={() => { orderTodo("completed", "asc") }}>asc</button>
            <button onClick={() => { orderTodo("completed", "disc") }}>disc</button>
          </div>
        </div>
        <div className="">
          <div>{totTitleSearch(searchText) > 0 ? `Risultati:${totTitleSearch(searchText)}` : "Cerca"}</div>
          <div className="d-flex">
            <form onSubmit={(e) => { e.preventDefault() }}>
              <input type="text" className="TodoCardSearch" value={searchText}
                onChange={(e) => { setSearchText(e.target.value) }} placeholder="Cerca...">
              </input>
              <button className="buttonCloseSearch" onClick={()=>{setSearchText("")}}>X</button>
            </form>
          </div>
        </div>

        <div className="">
          <div>Completed</div>
          <div>
            <select className="TodoCardSelect" value={filterTodo} onChange={(e) => { setFilterTodo(e.target.value) }} >
              <option value="all">TUTTI ({totTodos()})</option>
              <option value="todo">Da fare ({totTodo()})</option>
              <option value="done">Svolti ({totDone()})</option>
              <option value="ongoing">In corso ({totOngoing()})</option>
            </select>
          </div>
        </div>
      </div>

      {totTodos() > 0 ?

        totTitleSearch(searchText) > 0 ?
          <div className="TodoList">
            {todos.map(todo => (
              <div key={todo.id} >

                {/* {checkFilter(todo) && <TodoCard todo={todo} />} */}
                {checkSearch(todo) && checkFilter(todo) && <TodoCard todo={todo} />}

              </div>
            ))
            }
          </div>
          :
          <div className="errMsg">
            Nessun risultato trovato
          </div>
        :

        <div className="errMsg">
          Non vi sono elementi nella lista
        </div>

      }
    </div>

  )

}

export default TodoList

