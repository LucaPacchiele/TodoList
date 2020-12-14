import React from "react";
import Droplist from "./Droplist";

export default class Infopoint extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  setShow = () => {
    this.setState({
      show: !this.state.show
    }, () => {
      console.log(this.state.show)
    })
  }

  // hideShow = () => {
  //   this.setState({
  //     show: false
  //   })
  // }

  //"bypass" della funzione tra padre (Cards) e figlio (Droplist)
  setFont(defaultFont) {
    this.props.setFont(defaultFont)
  }

  

  render() {
    return (
      <div className="Infopoint">
        <div className="infoIcon" onClick={this.setShow}>
          <div><i className="fa fa-ellipsis-v"
          style={this.state.show ? {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}}
          
          ></i>
          </div>
        </div>

        { this.state.show === true &&
          <div className="infoContainer" onClick={this.setShow}>
            <Droplist setFont={this.props.setFont} defaultFont={this.props.defaultFont} />
          </div>
        }


      </div>
    )
  }
}