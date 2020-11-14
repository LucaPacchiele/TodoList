/* Actions, Viewer, Title */

import Card from "./Card";
import Data from "../assets/card.json"
import React from "react";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {Data.map((card, index) => (
          <Card key={index} id={card.id} contrast={card.contrast} nomeFont={card.nomeFont} descr={card.descr} />
        ))}
      </div>
    )
  }

}

export default App;