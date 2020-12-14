import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="Titolo">
        {this.props.title}
      </div>
    )
  }
}

export default Title;