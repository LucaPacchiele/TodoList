import React from "react";

export default class ToolTip extends React.Component {
  render() {
    return (
      <div className="ToolTip" style={{left: this.props.x, top: this.props.y}} onClick={(e) => { this.props.setToolTip(e) }}>
          <div className="ToolTipBox" onClick={() => { this.props.setFormat('h1') }}>h1</div>
          <div  className="ToolTipBox" onClick={() => { this.props.setFormat('h2') }}>h2</div>
          <div  className="ToolTipBox" onClick={() => { this.props.setFormat('p') }}>p</div>
      </div>
    )
  }
}