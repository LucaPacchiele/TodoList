import React from "react";

class Button extends React.Component {

  //il costruttore è l'unica parte di codice che viene eseguita PRIMA del render
  constructor(props) {
    super(props);
    this.col = "yellow"; //colore default bottone
    if (this.props.description === "likes") // si può mettere if e altro codice
      this.col = "blue";
    else this.col = "red";
  }
  cambiaColore = () => {
    //toggle colore bottone
    if (this.col === "blue" || this.col === "red" || this.col === "yellow") this.col = "green";
    else if (this.props.description === "likes")
      this.col = "blue"
    else
      this.col = "red"
    this.forceUpdate();
  }
  mOver = () => {
    //toggle colore bottone
    if (this.col !== "green")
      this.col = "yellow"
    this.forceUpdate();
  }
  mOut = () => {
    if (this.col === "yellow") {
      if (this.props.description === "likes")
        this.col = "blue"
      else
        this.col = "red"
    }
    this.forceUpdate();
  }


  render() {

    return (

      <button
        style={{ backgroundColor: this.col }}
        onClick={this.cambiaColore}
        onMouseOver={this.mOver}
        onMouseOut={this.mOut}>
        {this.props.description} {this.props.numero}
      </button>
    );
  }
}

export default Button;
