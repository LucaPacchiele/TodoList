import React from "react";

class StoricoTempi extends React.Component {
  render() {

    return (
      <div className="StoricoTempi">
        { !this.props.btnStart ? <h2>Premere pausa o reset</h2> : <h1>Premere start</h1> }
        {  this.props.tempi.length > 0  &&

          <ul>
            {this.props.tempi.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>

          
          
      
      }
      </div>
    )
  }
}

export default StoricoTempi;