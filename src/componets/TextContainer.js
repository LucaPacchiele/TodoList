import React from "react";

export default class TextContainer extends React.Component {
  
  render() {
    return (
      <div className="TextContainer"
        style={{ fontFamily: this.props.nomeFont }}
        onMouseUp={(e) => { this.props.setToolTip(e) }}>

        <div className="titolo">
          {this.props.nomeFont}
        </div>

        {this.props.format ==='h1' && <h1> {this.props.children} </h1>} 
        {this.props.format ==='h2' && <h2> {this.props.children} </h2>} 
        {this.props.format ==='p' && <p> {this.props.children} </p>}  
          
      </div>
    )
  }
}