import React, { useContext, useEffect, useState } from 'react'

import useTodo from '../hook/useTodo'

import { AppContext } from '../context/AppContext'

const TodoCard = (props) => {

    const { clearTodos, updateTodo, editUpdate, setEditUpdate } = useContext(AppContext)

    const { renderCompleted, updatePref } = useTodo()


    //variabili di stato del Todo temporaneo che viene creato, gestito ed inviato attraverso il form
    const [editId, setEditId] = useState(props.todo.id)
    const [editTitle, setEditTitle] = useState(props.todo.title)
    const [editCompleted, setEditCompleted] = useState(props.todo.completed)
    const [editPref, setEditPref] = useState(props.todo.pref)
    const [buttonForm, setButtonForm] = useState() //potrà essere "confirm" o "undo" a seconda del bottone del form

    // mostra il form ed inizializza i valori temporanei di editId, editTitle, editCompleted:
    // questi valori verranno modificati da onChange e inviati da submitForm che invierà l'oggetto todo (creato dai valori temporanei)
    // allo stato del context attraverso updateTodo
    const createForm = (item) => {
        setEditUpdate(item.id) //imposto la "visualizzazione form"
        setEditId(item.id)
        setEditTitle(item.title)
        setEditCompleted(item.completed)
        setEditPref(item.pref)
    }
    const submitForm = (e) => {
        e.preventDefault()
        setEditUpdate(false) //chiudo la "visualizzazione form"
        updateTodo({
            id: editId,
            title: editTitle,
            completed: editCompleted,
            pref: editPref
        })

    }

    return (
        <>
            {editUpdate === props.todo.id ?

                <form onSubmit={(e) => submitForm(e)} noValidate>

                    <div className="TodoCard">
                        <div className="TodoCardId">{editId}</div>
                        <div className="TodoCardTitle">
                            <textarea className="TodoCardTextarea" name="title" value={editTitle} onChange={e => { setEditTitle(e.target.value) }}></textarea>
                        </div>
                        <div className="TodoCardActions">
                            <span className="TodoCardCompleted">
                                <select className="TodoCardSelect" name="completed" value={editCompleted} onChange={e => { setEditCompleted(e.target.value) }}>
                                    <option value="todo">Da fare</option>
                                    <option value="done">Svolto</option>
                                    <option value="ongoing" >In corso</option>
                                </select>
                            </span>
                            <span>
                                <button type="submit" name="confirm" onClick={() => { setButtonForm("confirm") }}><i className="fa fa-check"></i></button>
                            </span>
                            <span>
                                <button type="submit" name="undo" onClick={() => { setButtonForm("undo") }}><i className="fa fa-undo"></i></button>
                            </span>

                        </div>
                    </div>


                </form>

                :

                <div className="TodoCard">
                    <div className="TodoCardId">{props.todo.id}</div>
                    <div className="TodoCardTitle">{props.todo.title}</div>
                    <div className="TodoCardActions">
                        <span className="TodoCardCompleted">
                            <span className={`color${props.todo.completed}`}>{renderCompleted(props.todo.completed)}</span>
                        </span>
                        <span><button onClick={() => { createForm(props.todo) }}><i className="fa fa-edit"></i></button></span>
                        <span><button onClick={() => { clearTodos(props.todo.id) }}><i className="fa fa-trash"></i></button></span>
                        <span><button className="buttonPref" onClick={() => { updatePref(props.todo) }}>
                            <i className="fa fa-star" style={props.todo.pref ? { color: "yellow" } : { color: "black" }}></i>
                        </button></span>
                    </div>

                </div>
            }
        </>
    )
}

export default TodoCard