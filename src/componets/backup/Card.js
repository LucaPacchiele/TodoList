import ButtonColors from "./ButtonColors";
import Data from "../assets/card.json"
import React from "react";

const INIT_STATE = {
  id: "0",
  contrast: [],
  nomeFont: "",
  descr: "",
  bgCol: "#000000"
}

class Card extends React.Component {
  constructor(props) {
    super(props)

    //state avrà tutte gli attributi del json ed un codice che identifica il riferimento dell'ultima Card modificata
    this.state = INIT_STATE

    //se non la metto la funzione bgSet chiamata da ButtonColors perde il riferimento con il this della Card
    //è come se passassi la funzione per riferimento?
    this.bgSet = this.bgSet.bind(this);

  }

  //se metto qui la arrow function si spacca (render in loop)
  //modifico lo stato dal ButtonColors
  bgSet(col, idCard) {
    this.setState({
      id: idCard,
      bgCol: col
    })
  }

  //Quando aggiorno il render Cards devo memorizzare l'ultimo stato aggiornato
  componentDidUpdate(prevState, prevProps) {
    console.log("UPDATE", this.state)
  }

  //Quando aggiorno il render Cards devo memorizzare l'ultimo stato aggiornato
  componentDidUpdate(prevState, prevProps) {
    console.log("UPDATE", this.state)
  }
  // startTimer = () => {
  //   this.timerInterval = setInterval(() => {
  //     this.setState({
  //       tempo: this.state.tempo + 1,
  //       btnStart: false,
  //       btnPause: true
  //     })
  //   }, 10)
  // }

  render() {
    console.log("STATO", this.state)
    // console.log(Data)
    return (
      <div className="App">
        {Data.map((card, index) => (

          <div className="Card" key={index} style={{ backgroundColor: this.state.bgCol }}>

            <ButtonColors colors={card.contrast} bgSet={this.bgSet} idCard={index} />

            {/* struttura card restante */}

          </div>
        ))}
      </div>
    )
  }

}

export default Card;