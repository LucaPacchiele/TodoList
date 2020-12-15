import React, { useContext, useEffect, useState } from 'react'

import useTodo from '../hook/useTodo'

import { AppContext } from '../context/AppContext'

const TodoAddCard = () => {

    const { addTodo, setTodos, calcNewId } = useContext(AppContext)


    //variabili di stato del Todo temporaneo che viene creato, gestito ed inviato attraverso il form
    const [editId, setEditId] = useState(0)
    const [editTitle, setEditTitle] = useState("")
    const [editCompleted, setEditCompleted] = useState("todo")
    const [editAdd, setEditAdd] = useState(true) //variabile di controllo per sapere se è stato inviato o meno il form


    // mostra il form con i valori inizializzati
    // questi valori verranno modificati da onChange e inviati da submitForm che invierà l'oggetto todo (creato dai valori temporanei)
    // allo stato del context attraverso addTodo
    const clearForm = () => {
        setEditAdd(true)
        setEditTitle("")
        setEditCompleted("todo")
        //setEditId(item.id)
        //setEditTitle(item.title)
        //setEditCompleted(item.completed)
    }
    const submitForm = (e) => {
        e.preventDefault()
        setEditAdd(false)
        //controllo valori non vuoti
        setTodos(addTodo({
            title: editTitle,
            completed: editCompleted,
            pref: false
        }))

    }

    //ogni volta che cambia toEditAdd (cioè ogni volta che viene inviato il form), crea nuovamente il form
    useEffect(() => {
        clearForm()
    }, [editAdd])


    return (

        <form onSubmit={(e) => submitForm(e)} noValidate>

            <div className="TodoCard" style={{ backgroundColor: "#fe99cc" }}>
                <div className="TodoCardTitle">
                    <textarea className="TodoCardTextarea" name="title" value={editTitle} placeholder="Inserisci un nuovo ToDo..."
                        onChange={e => { setEditTitle(e.target.value) }}></textarea>
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
                        <button type="submit" name="add"><i className="fa fa-plus"></i></button>
                    </span>
                </div>
            </div>


        </form>


    )
}

export default TodoAddCard