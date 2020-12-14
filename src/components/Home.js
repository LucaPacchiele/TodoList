import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../context/AppContext'
import useTodo from '../hook/useTodo'

const Home = () => {

  const { todos, setTodos, callApi, clearTodos } = useContext(AppContext)

  const {totTodos, totPref, totTodo, totDone, totOngoing } = useTodo()

  return (
    <div className="Home">
      <div className="HomeActions">
        <button onClick={() => { callApi() }}>Load from URL</button>
        <button onClick={() => { clearTodos() }}>Clear all</button>
      </div>
      <div className="HomeSummary">
        <div>Todo totali: <span style={{color:"green"}}>{totTodos()}</span></div>
        <hr />
        <div>Todo preferiti: <span style={{color:"green"}}> {totPref()} </span></div>
        <hr />
        <div>Da fare: <span style={{color:"green"}}>{totTodo()}</span></div>
        <div>Svolti: <span style={{color:"green"}}>{totDone()}</span></div>
        <div>In corso: <span style={{color:"green"}}>{totOngoing()}</span></div>
      </div>
    </div>
  ) 

}

export default Home