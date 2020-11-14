import React from "react";

export default class Droplist extends React.Component {

  render() {
    return ( 

      <div className="Droplist">
        <div onClick={() => { this.props.setFont('defaultFont') }}>
          <span style={{ fontFamily: this.props.defaultFont }}>Font predefinito</span>
        </div>
        <div onClick={() => { this.props.setFont('Comic Sans Ms') }}>
          <span style={{ fontFamily: 'Comic Sans Ms' }}>Comic Sans Ms</span></div>
        <div onClick={() => { this.props.setFont('Courier New') }}>
          <span style={{ fontFamily: 'Courier New' }}>Courier New</span>
        </div>
        <div onClick={() => { this.props.setFont('Times New Roman') }}>
          <span style={{ fontFamily: 'Times New Roman' }}>Times New Roman</span>
        </div>
      </div>

    )
  }
}