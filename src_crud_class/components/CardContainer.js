import React from "react";
import Card from "./Card";

export default class CardContainer extends React.Component {

  render() {
    return (

      <div className="CardContainer">

        {this.props.cards.map(card => (
          <div key={card.id}>
            <Card id={card.id} name={card.name} email={card.email} body={card.body} removeCard={this.props.removeCard} editCard={this.props.editCard}/>
          </div>

        ))}

      </div>

    )
  }
}
