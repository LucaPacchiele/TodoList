import React, { useContext, useEffect, useState } from 'react'

// import TodoForm from './TodoForm'

import { AppContext } from '../context/AppContext'

const TodoList = () => {
  const { todos, setTodos, clearTodos, updateTodo } = useContext(AppContext)

  
  const [showForm, setShowForm] = useState(false) // uso le quadre per destrutturare useState

  const [activeId, setActiveId] = useState()
  const [activeTitle, setActiveTitle] = useState()
  const [activeCompleted, setActiveCompleted] = useState()


  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name)
  //   setTodos(name)
  // }

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }


  // mostra il form ed inizializza i valori al suo interno: questi valori verranno modificati da onChange
  // e inviati da submitForm che invierà l'intero todo modificato a updateTodo del context per modificare quel todo
  // che verrà trovato tra tutti i todo dello stato dell'app
  const createForm = (item) => {
    setShowForm(true)
    setActiveId(item.id)
    setActiveTitle(item.title)
    setActiveCompleted(item.completed)
  }
  const submitForm = (e) => {
    e.preventDefault()
    setShowForm(false)
    updateTodo({
      id:activeId,
      title:activeTitle,
      completed:activeCompleted
    })
    
  }
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setActiveTitle(e.target.value)
      console.log("title agg: ", activeTitle)
    }
    else if (e.target.name === "completed") {
      setActiveCompleted(e.target.value)
    }
  }


/* ALL INTERNO */

  return (
    <div className="TodoListContainer">

      <div className="TodoCard" style={{ fontWeight: "bold" }}>
        <div>ID</div>
        <div>Title</div>
        <div>Completed</div>
        <div>Actions</div>
      </div>

      {showForm &&
        <form onSubmit={(e) => submitForm(e)} noValidate>
          <div className="TodoCard" style={{ backgroundColor: "#22ccee" }}>
            <div>{activeId}</div>
            <div>
              <input type="text" name="title" value={activeTitle} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
              {/*automaticamente imposta il value di select come il selected di option */}
              <select name="completed" value={activeCompleted.toString()} onChange={(e) => handleChange(e)}>
                <option value={true} >vero</option>
                <option value={false} >falso</option>
              </select>
            </div>

            <span><button type="submit" ><i className="fa fa-edit"></i></button></span>

            <span></span>

          </div>
        </form>
      }


      {todos.length > 0 ?

        <div className="TodoList">
          {todos.map(todo => (
            <div className="TodoCard" key={todo.id}>
              <div style={{ fontWeight: "bold" }}>{todo.id}</div>
              <div>{todo.title}</div>
              <div>{todo.completed.toString()}</div>
              <div>
                <span><button onClick={() => { createForm(todo) }}><i className="fa fa-edit"></i></button></span>

                <span><button onClick={() => { clearTodos(todo.id) }}><i className="fa fa-trash"></i></button></span>
              </div>
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

