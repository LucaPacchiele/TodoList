/*

- controllo ID, da correggere quando si aggiunge (sarebbe da richiamare al onclick di add), quando si elimina va bene

- aggiunto pulsante rimuovi e modifica sulla Card singola

- correzioni CSS

*/

import React from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";

// import Form from "./Form";
// import Button from "./Button";

// import Card from "./Cards";
// import Card from "./ListaCard";

const INITIAL_STATE = {
  btnLoad:false,
  newId: 1,
  editId:1,
  editCard:false,
  cards: []
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    //id, name, email, body

    this.state = {
      btnLoad:false,
      editCard:false,
      newId: 1,
      editId:1,
      cards: []
    }

    this.bindFx()
  }

  bindFx() {
    this.loadCards = this.loadCards.bind(this);
    this.resetCards = this.resetCards.bind(this);
    this.addCards = this.addCards.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.editCard = this.editCard.bind(this);
    this.setCard = this.setCard.bind(this);
  }


  loadCards() {
    const url = "http://jsonplaceholder.typicode.com/comments"
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const res2 = res.slice(1, 15) //array tagliato a 15 risultato

        res2.map(el => (
          this.setState({
            btnLoad: true,
            cards: this.state.cards.concat([el])
          })
        ))

      })
      .catch(err => {
        console.warn('API error', err)
      })
  }

  resetCards() {
    this.setState(INITIAL_STATE)
  }

  addCards(card) {
    this.setState({
      newId: this.setId(),
      cards: [card, ...this.state.cards] //aggiunge card in testa all'array this.state.cards
    })
  }

  removeCard(idCard) {
    //risalgo alla Card tramite idCard
    const arr = this.state.cards
    let index = -1;

    this.state.cards.map((el, key) => {
      if (el.id === idCard) {
        //key è la posizione dell'array, non necessariamente uguale a idCard (si presuppone idCard univoco)
        index = key
        return index
      }
    })

    //restituisce l'elemento eliminato; arr invece è un nuovo array senza l'elemento
    arr.splice(index, 1)

    if (index >= 0) {
      this.setState({
        newId: this.setId(),
        cards: arr
      }, () => { console.log("asd", this.state) })
    }
    return;
  }

  setCard(card){
    this.removeCard(card.id)
    this.setState({
      editCard:false,
      cards: [card, ...this.state.cards] //aggiunge card in testa all'array this.state.cards
    })
  }


  editCard(idCard) {
    //risalgo alla Card tramite idCard
    const arr = this.state.cards
    let index = -1;

    this.state.cards.map((el, key) => {
      if (el.id === idCard) {
        //key è la posizione dell'array, non necessariamente uguale a idCard (si presuppone idCard univoco)
        index = key
        return index
      }
    })

    if (index >= 0) {
      this.setState({
        editId:index,
        editCard:true
      }, () => { console.log("editId", this.state.editId) 
      console.log("idCard", idCard)})
    }
    return;
  }

  //ritorna il primo id disponibile, senza duplicati, da assegnare alla nuova Card che creo dal Form
  setId() {
    let arrIndex = []

    this.state.cards.map((el) => (
      arrIndex.push(el.id)
    )
    )
    console.log("arrIndex", arrIndex)

    let nuovoId = 1 //parto da 1
    let flag = 0
    do {
      flag = 0
      arrIndex.map((el) => {
        if (el === nuovoId) {
          nuovoId++
          flag = 1;
        }
      })

      if (flag === 0) {
        break
      }
    } while (flag)

    console.log("nuovoId", nuovoId)

    return nuovoId
  }

  componentDidUpdate(prevProps, prevState) {
    const nuovoId = this.setId()
    if (prevState.newId !== nuovoId) {
      this.setState({
        newId: nuovoId
      }, ()=>{console.log("app update - stato ", this.state)})
    }
  }

  render() {
    console.log("app newId ", this.state.newId)
    return (

      <div className="App">
        <Header loadCards={this.loadCards} btnLoad={this.state.btnLoad}
        addCards={this.addCards} newId={this.state.newId}
        resetCards={this.resetCards} editCard={this.state.editCard} cardToEdit={this.state.cards[this.state.editId]} setCard={this.setCard}  />

        <div className="record">Record totali: <span style={{fontWeight:"bold", color:"red"}}>{this.state.cards.length}</span></div>
        <CardContainer cards={this.state.cards} removeCard={this.removeCard} editCard={this.editCard}/>

      </div>

    )
  }
}
