/* Actions, Viewer, Title */

import Titolo from "./Titolo";
import Viewer from "./Viewer";
import Actions from "./Actions";
import StoricoTempi from "./StoricoTempi";

import React from "react";

const STATO_INIZIALE = {
  tempo: 1465465252469,
  btnStart: true,
  btnPause: false,
  list: []
}

class App extends React.Component {
  constructor(props) {
    super(props)
    //inizializzazione stato
    this.state = STATO_INIZIALE
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState({
        tempo: this.state.tempo + 1,
        btnStart: false,
        btnPause: true
      })
    }, 10)
  }

  pauseTimer = () => {
    //non sarebbe possibile fare un semplice push, sia perchè
    //this.state va considerato come oggetto immutabile e sia 
    //perchè push ritornerebbe ritorna la lunghezza dell'array, non l'array mutato
    clearInterval(this.timerInterval)
    this.setState({
      btnStart: true,
      btnPause: false,
      list: [this.state.tempo, ...this.state.list] //inserisce all'inizio dell'array
      //list: this.state.list.concat([this.state.tempo]) // concatena alla fine dell'array
    })
  }

  resetTimer = () => {
    clearInterval(this.timerInterval)
    this.setState({
      tempo: 0,
      btnStart: true,
      btnPause: false,
      list: []
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Titolo title="Timer!" />
        <Viewer time={this.state.tempo} btnStart={!this.state.btnStart} />
        <Actions start={this.startTimer} pause={this.pauseTimer} reset={this.resetTimer} btnStart={this.state.btnStart} btnPause={this.state.btnPause} />
        <StoricoTempi tempi={this.state.list} btnStart={this.state.btnStart}/>
      </div>
    )
  }

}

export default App;