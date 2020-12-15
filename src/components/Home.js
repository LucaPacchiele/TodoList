import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import { AppContext } from '../context/AppContext'
import useTodo from '../hook/useTodo'

const Home = () => {

  const { todos, setTodos, callApi, clearTodos } = useContext(AppContext)

  const { totTodos, totPref, totTodo, totDone, totOngoing } = useTodo()

  return (
    <div className="Home">
      <h1>ToDo List v1.0</h1>
      <div className="HomeActions">
        <button className="HomeActionsButton" onClick={() => { callApi() }}>
          <div className="HomeActionsName">Carica da API</div>
          <i className="fa fa-link"></i>
        </button>
        <button className="HomeActionsButton" onClick={() => { clearTodos() }}>
          <div className="HomeActionsName"> Elimina tutti</div>
          <i className="fa fa-trash"></i>
        </button>
      </div>
      <div className="HomeSummary">
        <div>
          ToDo totali: <span style={{ color: "green" }}>{totTodos()}</span>
        {totTodos()>0 && <span className="visualizzaButton"><Link to="/TodoList">visualizzali</Link></span>}
        </div>
        <hr className="hrSpace" />
        <div>Preferiti: <span style={{ color: "green" }}> {totPref()} </span></div>
        <hr className="hrSpace" />
        <div>Da fare: <span style={{ color: "green" }}>{totTodo()}</span></div>
        <div>Svolti: <span style={{ color: "green" }}>{totDone()}</span></div>
        <div>In corso: <span style={{ color: "green" }}>{totOngoing()}</span></div>
      </div>
    </div>
  )

}

export default Home