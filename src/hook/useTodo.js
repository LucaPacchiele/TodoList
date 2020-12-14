import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../context/AppContext'


const useTodo = () => {

    const { todos, setTodos, clearTodos, updateTodo } = useContext(AppContext)


    const totTodo = () => {
        let n = 0
        todos.map(el => (el.completed === "todo" && n++
        ))
        return n
    }

    const totDone = () => {
        let n = 0
        todos.map(el => (el.completed === "done" && n++
        ))
        return n
    }

    const totOngoing = () => {
        let n = 0
        todos.map(el => (el.completed === "ongoing" && n++
        ))
        return n
    }

    const totPref = () => {
        let numPref = 0
        todos.map(el => (el.pref && numPref++
        ))
        return numPref
    }

    const totTodos = () => {
        return todos.length
    }

    const updatePref = (item) => {
        updateTodo({
            id: item.id,
            title: item.title,
            completed: item.completed,
            pref: !item.pref
        })
    }

    const renderCompleted = (param) => {
        switch (param) {
            case "todo":
                return "Da fare"
            case "done":
                return "Svolto"
            case "ongoing":
                return "In corso"
            default:
                return "non definito"
        }
    }


    return { renderCompleted, updatePref, totPref, totTodos, totTodo, totDone, totOngoing }
}

export default useTodo