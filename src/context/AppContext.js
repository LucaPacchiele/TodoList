import React, { createContext, useEffect, useState } from 'react'

//importare ed utilizzare AppContext per nei consumers
export const AppContext = createContext()

const EMPTY_TODO = {
  userId: 0,
  id: 0,
  title: '',
  completed: "todo",
  pref: false,
  update: false
}




//importare ed impostare AppProvider a monte dei consumers
const AppProvider = ({ children }) => {

  const [todos, setTodos] = useState([])

  const [editUpdate, setEditUpdate] = useState(false)

  // // const urlP = "http://cors-anywhere.herokuapp.com/"
  // const URLP = 'https://cors-anywhere.herokuapp.com'
  //   const GITURL = 'https://jobs.github.com/positions.json'
  const url = "http://jsonplaceholder.typicode.com/todos"

  //il nuovo ID è il valore del massimo tra gli indici degli array + 1
  const calcNewId = (arr) => {
    if (arr.length > 0) {
      let arrIndex = []
      arr.map((el, key) => {
        return arrIndex[key] = el.id
      })
      return Math.max(...arrIndex) + 1
    }
    else return 0
  }

  /*importante!
    setState (anche epr gli hooks) è asincrona: se è necessario fare operazioni annidate sullo stato (ad esempio se lo stato è un array
    e vogliamo aggiungere elementi ed allo stesso tempo chiedere la sua lunghezza), è necessario che queste avvengano nel valore dello
    stato IN QUEL MOMENTO. Partendo quindi da un setState e dato quindi un previousState, richiamato possibilmente in una funzione esterna
    al componente, è necessario lavorare con quel previousState, che rappresenta lo stato in quel momento, una sorta di FOTOGRAFIA.
    Viceversa, siccome lo stato è gestito in maniera ASINCRONA, richiamare ad es. un todos.length direttamente (sebbene all'interno
    del previousState) viene tuttavia eseguita una nuova interrogazione dello stato del quale non conosciamo i valori.
    E' corretto usare previousState.length
  */
  const addTodo = (todo) => {
    return (previousState, currentProps) => {
      return [{
        userId: todo.userId,
        id: calcNewId(previousState),
        title: todo.title,
        completed: todo.completed,
        pref: todo.pref,
        update: todo.update
      }, ...previousState]
    }

  }

  const TodoInit = (arr) => {
    arr.map((el, i) => {
      let item = {
        userId: 0,
        id: 0,
        title: '',
        completed: false,
        pref: false,
        update: false
      }

      item.userId = el.userId
      item.id = 0 // el.id (id originale)
      item.title = el.title
      el.completed ? item.completed = "done" : item.completed = "todo"

      setTodos(addTodo(item))

    })
  }


  const callApi = async () => {
    try {

      const response = await fetch(url);
      const dataAll = await response.json();
      const data = dataAll.slice(0, 15) //array tagliato a 15 risultati
      TodoInit(data) //inizializzazione stato con preferiti, ecc
      //console.log(dataInit)

    } catch (err) {
      console.warn('error', err)
    }
  }

  useEffect(() => {
    callApi()
  }, [])
  useEffect(() => {
   // console.log("todos", todos)
  }, [todos])



  const clearTodos = (idTodo) => {
    console.log("idTodo", idTodo)
    if (idTodo >= 0) {
      //viene cancellato l'elemento con id === idTodo
      //è necessario appoggiarsi ad un array provvisorio todosProv ed è necessario accedere
      //allo stato precedente (attraverso setTodos), altrimenti il nuovo array provvisorio non viene
      //riconosciuto come elemento che aggiorna il setTodo. E' come se facesse un controllo "profondo"
      //sull'elemento todosProv che viene ritornato
      const indice = todos.findIndex(el => el.id === idTodo)

      if (indice > -1) {
        setTodos(prevState => {
          const todosProv = [...prevState]
          todosProv.splice(indice, 1)
          return todosProv
        }
        )
      }

    }
    else {
      //cancella tutto
      console.log("delete all")
      setTodos([])
    }
  }

  const updateTodo = (todo) => {
    const indice = todos.findIndex(el => el.id === todo.id)
    if (indice > -1) {
      setTodos(prevState => {
        const todosProv = [...prevState]
        todosProv.splice(indice, 1, todo)
        return todosProv
      })
    }
  }



  const orderTodo = (param, type) => {

    if (param === "id") {
      setTodos(prevState => {
        let newArr = [...prevState]
        newArr.sort(function (a, b) {
          if (type === "asc")
            return a.id - b.id
          else
            return b.id - a.id
        })
        return newArr
      })

    }

    if (param === "completed") {
      setTodos(prevState => {
        let newArr = [...prevState]
        newArr.sort(function (a, b) {
          const nameA = a.completed.toUpperCase();
          const nameB = b.completed.toUpperCase();
          if (nameA < nameB) {
            if (type === "disc")
              return -1;
            else
              return 1
          }
          if (nameA > nameB) {
            if (type === "disc")
              return 1
            else
              return -1
          }
          return 0;
        })
        return newArr
      })

    }

  }



  return (
    <AppContext.Provider value={{
      todos, setTodos, callApi, clearTodos, updateTodo, addTodo,
      editUpdate, setEditUpdate, orderTodo
    }}>
      {children}
    </AppContext.Provider>
  )


}

export default AppProvider
