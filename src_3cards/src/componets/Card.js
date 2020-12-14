import Infopoint from "./Infopoint"
import ButtonColors from "./ButtonColors";
import TextContainer from "./TextContainer";
import ToolTip from "./ToolTip";
import React from "react";

//attiva o disattiva la stampa dello stato in alcuni punti del codice
const DEBUG_STATE = 0

class Card extends React.Component {
  constructor(props) {
    super(props)

    //state avrà tutte gli attributi del json ed un codice che identifica il riferimento dell'ultima Card modificata
    this.state = {
      id: this.props.id,
      contrast: this.props.contrast,
      nomeFont: this.props.nomeFont,
      descr: this.props.descr,
      bgCol: '#cccccc', // colore base partenza
      mouseX: 0,
      mouseY: 0,
      showToolTip: false,
      format: 'p',
      overCard: false
    }

    //salvo lo stato iniziale di default in initialState
    //se lo facessi nel componentDidMount avrei problemi nel leggere i valori in esso contenuti, dovuti all'asincrono
    this.initialState = {
      id: this.props.id,
      contrast: this.props.contrast,
      nomeFont: this.props.nomeFont, //questo mi serve dopo per il confronto del font in setFont
      descr: this.props.descr,
      bgCol: '#cccccc', // colore base partenza
      mouseX: 0,
      mouseY: 0,
      showToolTip: false,
      format: 'p',
      overCard: false
    }

    //invoco i bind di ciascuna funzione utilizzata
    this.bindFx()
    
  }

  //ho raggruppato i bind qui
  bindFx() {
    this.setBg = this.setBg.bind(this);
    this.setFont = this.setFont.bind(this);
    this.setToolTip = this.setToolTip.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.overCard = this.overCard.bind(this);
  }

  //modifico lo sfondo della Card, solo se il valore ricevuto da ButtonClass è diverso dallo sfondo attuale
  setBg(col) {
    if (col !== this.state.bgCol) {
      this.setState({
        bgCol: col
      })
    }
  }

  //se ricevo un font specifico, lo carico nello stato attuale, altrimenti resetto il font con quello dello stato iniziale
  setFont(fontInput) {
    if (fontInput !== "defaultFont") {
      this.setState({
        nomeFont: fontInput
      })
    }
    else {
      //quando si preme default Font, torna a quello memorizzato nello stato iniziale
      this.setState({
        nomeFont: this.initialState.nomeFont
      })
    }
  }

  //gestisce posizionamento e visibilità ToolTip
  setToolTip(e) {
    //setToolTip implementato nella funzione nella Card per un motivo prettamente grafico:
    //il ToolTip viene tagliato limitatamente al TextContainer se inserisco il suo stato e setToolTip

    console.log(e)
    //viene posizionato il ToolTip nella posizione del mouse ("assoluta" della finestra determinata da e.clientX alla quale sottraggo
    //quella relativa rispetto al componente Card (ad ogni offsetParent risalgo di componente:
    //clicco in un elemento (h1, div) di TextContainer, quindi offsetParent restituisce TextContainer
    //ripetendo offsetParent arrivo a Card e tramite gli attributi offsetLeft e offsetTop vedo come questa è renderizzata
    // in maniera assoluta rispetto alla finestra)
    const offset = 50;
    // per determinare un offset corretto andrebbe calcolata dinamicamente la metà della larghezza e dell'altezza del div .ToolTip
    //ho provato con le ref ma non sono riuscito
    const x = e.clientX - e.target.offsetParent.offsetParent.offsetLeft
    const y = e.clientY - e.target.offsetParent.offsetParent.offsetTop - offset
    this.setState({
      mouseX: x,
      mouseY: y,
      showToolTip: !this.state.showToolTip
    })
  }

  //cambia <h1>, <h2>, <p> del TextContainer al valore ricevuto da ToolTipo
  setFormat(format) {
    this.setState({
      format
    })

  }

  //gestione margine e ombreggiatura OnMouseEnter sulla Card
  overCard() {
    this.setState({
      overCard: !this.state.overCard
    }, () => { console.log("ccc", this.state.overCard) })
  }

  //non utilizzata
  componentDidMount() {
    DEBUG_STATE && console.log("ADD", this.state)

  }

  //non utilizzata
  componentDidUpdate(prevState, prevProps) {
    DEBUG_STATE && console.log("UPDATE", this.state)
  }

  render() {
    DEBUG_STATE && console.log("STATO", this.state)
    return (
      <div className="Card" onMouseEnter={this.overCard} onMouseLeave={this.overCard}
        style={this.state.overCard ?
          { backgroundColor: this.state.bgCol, marginTop: 20, boxShadow: '5px 25px 20px' }
          :
          { backgroundColor: this.state.bgCol }}
      >
        <Infopoint setFont={this.setFont} defaultFont={this.initialState.nomeFont} />
        <ButtonColors colors={this.state.contrast} setBg={this.setBg} />

        <hr className="hr1" />

        {/* Si potrebbe passare anche una variabile che colora il testo in 
        contrasto con lo sfondo della Card, in modo da rendere il contenuto leggibile */}
        <TextContainer nomeFont={this.state.nomeFont} setToolTip={this.setToolTip} format={this.state.format}>
          <>
            {this.state.descr}
          </>
        </TextContainer>

        { this.state.showToolTip === true &&
          <ToolTip x={this.state.mouseX} y={this.state.mouseY} setToolTip={this.setToolTip} setFormat={this.setFormat} />
        }

      </div>
    )
  }

}

export default Card;