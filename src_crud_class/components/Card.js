import React from "react";

export default class Card extends React.Component {

  render() {
    return (

      <div className="Card">
        <div className="cmdCard">
          <button onClick={() => { this.props.editCard(this.props.id) }}><i class="fa fa-plus"></i></button>
          <div><strong>ID <span style={{color:"red"}}>{this.props.id}</span></strong></div>
          <button onClick={() => { this.props.removeCard(this.props.id) }}><i class="fa fa-trash"></i></button>
        </div>
        <div>
          <h1>{this.props.name}</h1>
        </div>

        <div>
          <h2> {this.props.email}</h2>
        </div>
        <div> {this.props.body}</div>
      </div>

    )
  }
}
