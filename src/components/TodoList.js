import React, { useContext, useEffect, useState } from 'react'
import {
  Link
} from "react-router-dom";
import TodoCard from './TodoCard'
import TodoAddCard from './TodoAddCard'

import useTodo from '../hook/useTodo'

import { AppContext } from '../context/AppContext'

const TodoList = () => {
  const { todos, orderTodo } = useContext(AppContext)
  const { totTodos, totTodo, totDone, totOngoing, totTitleSearch } = useTodo()
  const [filterTodo, setFilterTodo] = useState("all")
  const [searchText, setSearchText] = useState("")
  const pageTop = React.createRef()

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
    if (todo.title.toUpperCase().includes(searchText.toUpperCase())) return true
    return false
  }

  useEffect(() => {
    orderTodo("id", "asc")
  }, [])
  // useEffect(() => {
  //   console.log(totTitleSearch(searchText))
  // }, [totTodo()])




  return (
    <div className="TodoListContainer">

      <div ref={pageTop} />

      <h1>ToDo List</h1>

      <TodoAddCard />
      <>
        <div className="TodoMenu d-flex s-around">
          <div className="">
            <div>ID</div>
            <div className="d-flex">
              <button onClick={() => { orderTodo("id", "asc") }}><i className="fa fa-angle-up"></i></button>
              <button onClick={() => { orderTodo("id", "disc") }}><i className="fa fa-angle-down"></i></button>
            </div>
          </div>
          <div className="">
            <div>{totTitleSearch(searchText) > 0 ? `Risultati:${totTitleSearch(searchText)}` : "Cerca"}</div>
            <form onSubmit={(e) => { e.preventDefault() }}>
              <div className="TodoCardSearchBox">
                <input type="text" className="TodoCardSearch" value={searchText}
                  onChange={(e) => { setSearchText(e.target.value) }} placeholder="Cerca tra i titoli...">
                </input>
                <button className="buttonCloseSearch" onClick={() => { setSearchText("") }}><i className="fa fa-times"></i></button>
              </div>
            </form>
          </div>
          <div className="">
            <div>Ordina status</div>
            <div className="d-flex"><button onClick={() => { orderTodo("completed", "asc") }}>A-Z</button>
              <button onClick={() => { orderTodo("completed", "disc") }}>Z-A</button>
            </div>
          </div>
          <div className="">
            <div>Filtra status</div>
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
      </>

      {totTodos() > 0 ?

        totTitleSearch(searchText) > 0 ?
          <>
            <div className="TodoList">
              {todos.map(todo => (
                <div key={todo.id} >

                  {/* {checkFilter(todo) && <TodoCard todo={todo} />} */}
                  {checkSearch(todo) && checkFilter(todo) && <TodoCard todo={todo} />}

                </div>
              ))
              }
            </div>
            <div className="pagePosButton" onClick={() => { pageTop.current.scrollIntoView({ behavior: 'smooth' }) }}><a>Torna su</a></div>
          </>
          :
          <div className="errMsg">
            Nessun risultato trovato
          </div>
        :

        <div className="errMsg">
          Non vi sono elementi nella lista, aggiungine uno o <Link to="/">caricali</Link>!
        </div>

      }
    </div>

  )

}

export default TodoList

