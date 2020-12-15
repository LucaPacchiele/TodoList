import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom";


const Navbar = () => {

    return (
        <div className="Navbar">
            <Link to="/"><button>Home</button></Link>
            <Link to="/TodoList"><button>TodoList</button></Link>
            <Link to="/Preferiti"><button>Pref<span className="fixTodolistNav">eriti</span></button></Link>
            <Link to="/About"><button>About</button></Link>
            <hr />
        </div>
    )
}

export default Navbar