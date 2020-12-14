import React from "react";

export default class ButtonColors extends React.Component {

  render() {
    return (
      <div className="ButtonColors">

        {this.props.colors.map((col, index) => (
          
          <button key={index} style={{ backgroundColor: col }} onMouseOver={() => { this.props.setBg(col, index) }}></button>
        ))}
      </div>
    )
  }
}