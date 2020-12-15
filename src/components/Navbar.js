import React from 'react'
import {
    Link
} from "react-router-dom";


const Navbar = () => {

    return (
        <div className="Navbar">
            <Link to="/">
                <button>
                    <span className="fixTodolistNavSm">Home</span>
                    <span className="fixTodolistNavBig"><i className="fa fa-home"></i></span>
                </button>
            </Link>
            <Link to="/TodoList">
                <button>
                    <span className="fixTodolistNavSm">TodoList</span>
                    <span className="fixTodolistNavBig"><i className="fa fa-list"></i></span>
                </button>
            </Link>
            <Link to="/Preferiti">
                <button>
                    <span className="fixTodolistNavSm">Preferiti</span>
                    <span className="fixTodolistNavBig"><i className="fa fa-star"></i></span>
                </button>
            </Link>
            <Link to="/About">
                <button>
                    <span className="fixTodolistNavSm">About</span>
                    <span className="fixTodolistNavBig"><i className="fa fa-at"></i></span>
                </button>
            </Link>
            <hr />
        </div>
    )
}

export default Navbar