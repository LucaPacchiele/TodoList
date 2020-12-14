import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navbar = () => {

    return (
        <div className="Navbar">
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/TodoList"><button>Todo List</button></Link>
                <Link to="/Preferiti"><button>Preferiti</button></Link>
                <Link to="/About"><button>About</button></Link>
                <hr />

            </nav>
        </div>
    )
}

export default Navbar