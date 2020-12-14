import React from "react";

export default class ButtonColors extends React.Component {



  render() {
    const idCard = this.props.idCard
    return (
      <div className="ButtonColors">

        {this.props.colors.map((col, index) => (
          
          <button key={index} style={{ backgroundColor: col }} onMouseOver={() => { this.props.bgSet(col, idCard) }}></button>
        ))}
      </div>
    )
  }
}