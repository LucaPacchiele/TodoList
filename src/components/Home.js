import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../context/AppContext'
import useTodo from '../hook/useTodo'

const Home = () => {

  const { todos, setTodos, callApi, clearTodos } = useContext(AppContext)

  const {totTodos, totPref, totTodo, totDone, totOngoing } = useTodo()

  return (
    <div className="Home">
      <h1>Todo List v1.0</h1>
      <div className="HomeActions">
        <button onClick={() => { callApi() }}>Carica da URL <i className="fa fa-link" style={{marginLeft:"20px"}}></i></button>
        <button onClick={() => { clearTodos() }}>Elimina tutti <i className="fa fa-trash" style={{marginLeft:"20px"}}></i></button>
      </div>
      <div className="HomeSummary">
        <div>Todo totali: <span style={{color:"green"}}>{totTodos()}</span></div>
        <hr className="hrSpace"/>
        <div>Todo preferiti: <span style={{color:"green"}}> {totPref()} </span></div>
        <hr className="hrSpace"/>
        <div>Da fare: <span style={{color:"green"}}>{totTodo()}</span></div>
        <div>Svolti: <span style={{color:"green"}}>{totDone()}</span></div>
        <div>In corso: <span style={{color:"green"}}>{totOngoing()}</span></div>
      </div>
    </div>
  ) 

}

export default Home