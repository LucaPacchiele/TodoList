import React from "react";

class Viewer extends React.Component {
  render() {
    
    return (
      // non posso inserire la condizione prima dello style, non posso nascondere una proprietà.
      // inoltre va obbligatoriamente definito il comportamento dello stile in situazione true e false
      <div className="Viewer" style={this.props.btnStart ? {backgroundColor:'#ffc4ff'} : {backgroundColor:'#cce4ff'}}>
        {this.props.time} s
      </div>
    )
  }
}

export default Viewer;