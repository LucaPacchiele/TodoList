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
      <h1>ToDo List <span className="text-blue">v1.0</span></h1>
     
      <div className="text-blue text-center">Crea, modifica e cancella i tuoi ToDo. Inizia subito con una chiamata API!</div>
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
          ToDo totali: <span className="text-blue">{totTodos()}</span>
        {totTodos()>0 && <span className="visualizzaButton"><Link to="/TodoList">visualizzali</Link></span>}
        </div>
        <hr className="hrSpace" />
        <div>Preferiti: <span className="text-blue"> {totPref()} </span></div>
        <hr className="hrSpace" />
        <div>Da fare: <span className="text-blue">{totTodo()}</span></div>
        <div>Svolti: <span className="text-blue">{totDone()}</span></div>
        <div>In corso: <span className="text-blue">{totOngoing()}</span></div>
      </div>
    </div>
  )

}

export default Home