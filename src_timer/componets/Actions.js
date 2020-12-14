import React from "react";

class Actions extends React.Component {


  render() {
    console.log(this.props.btnPause)
    return (
      <div className="Actions">
        {this.props.btnStart && <button onClick={this.props.start}>Start</button>}
        {this.props.btnPause && <button onClick={this.props.pause}>Pause</button>}
        <button onClick={this.props.reset} style={{backgroundColor:'#ee5555'}}>Reset</button>
      </div>
    )
  }
}

export default Actions;