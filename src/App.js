import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Container from './components/Container'
import TodoList from './components/TodoList'
import Preferiti from './components/Preferiti'

import AppProvider from './context/AppContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <AppProvider>

          <Navbar />

          <Container>

            
            
           

            <Switch>


              <Route exact path="/">
              <Home />
              </Route>
              <Route exact path="/TodoList">
              <TodoList />
              </Route>
              <Route exact path="/Preferiti">
              <Preferiti />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
            </Switch>

          </Container>
        </AppProvider>
      </div>
    </Router>
  )

}

export default App