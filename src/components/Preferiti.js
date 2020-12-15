import React, { useContext, useEffect, useState } from 'react'
import {
  Link
} from "react-router-dom";

import { AppContext } from '../context/AppContext'
import useTodo from '../hook/useTodo'

const Preferiti = () => {
  const { todos, setTodos, updateTodo } = useContext(AppContext)
  const { renderCompleted, updatePref, totPref } = useTodo()


  return (
    <div className="Preferiti">
      <h1>Preferiti</h1>





      {totPref() > 0 ?
        <>
          <div className="TodoMenu d-flex">
            <div className="TodoCardId">ID</div>
            <div className="TodoCardTitle">Titolo</div>
            <div className="TodoCardCompleted">Status</div>
          </div>

          <div className="TodoList">
            {todos.map(todo => (
              <div key={todo.id}>
                {todo.pref &&
                  <div className="TodoCard" key={todo.id} style={{ backgroundColor: "#ffe365" }}>
                    <div className="TodoCardId">{todo.id}</div>
                    <div className="TodoCardTitle">{todo.title}</div>
                    <div className="TodoCardActions">
                      <span className="TodoCardCompleted">
                        {renderCompleted(todo.completed)}</span>
                      <span><button className="buttonPref" onClick={() => { updatePref(todo) }}>
                        <i className="fa fa-star" style={todo.pref ? { color: "yellow" } : { color: "black" }}></i>
                      </button></span>
                    </div>

                  </div>
                }
              </div>
            ))}
          </div>
        </>
        :
        <div className="errMsg">
          Non vi sono preferiti nella lista, premi la <Link to="/TodoList">stellina</Link> su un Todo!
        </div>
      }
    </div>
  )
}


export default Preferiti