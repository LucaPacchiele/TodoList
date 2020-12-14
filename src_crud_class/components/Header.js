import React from "react";
import Form from "./Form";

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
    this.setShow = this.setShow.bind(this);
  }

  setShow() {
    this.setState({
      show: !this.state.show
    })
  }


 

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.editCard !== this.props.editCard){
    console.log("EDIT")
      this.setState({
        show: !this.state.show
      })}
  }




render() {
  console.log("btnLoad", this.props.btnLoad)
  return (
    <>
      <div className="Header">
        <div>
          <button id="btnLoad" onClick={() => { this.props.loadCards() }}
            style={this.props.btnLoad ? { opacity: 0.5, cursor: "auto" } : { opacity: 1, cursor: "pointer" }}
            disabled={this.props.btnLoad} >Load from URL</button>
        </div>
        <div>
          <button id="btnReset" onClick={() => { this.props.resetCards() }}>Reset</button>
        </div>
        <div>
          <button id="btnAdd" onClick={() => { this.setShow() }}>Add</button>
        </div>
      </div>

      {
        this.state.show &&
        <div className="FormBg">
          <Form show={this.state.show} setShow={this.setShow} id={this.props.newId} addCards={this.props.addCards}
            editCard={this.props.editCard} cardToEdit={this.props.cardToEdit} setCard={this.props.setCard} />
        </div>
      }
    </>
  )
}
}
