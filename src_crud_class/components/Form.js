import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //contiene i dati della form
      id: this.props.id,
      name: '',
      email: '',
      body: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //scrive solamente in tempo reale sull'input a aggiorna automaticamente lo stato,
  //in modo che non va settato nel submit
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setShow()
    //richiama la funzione in App che aggiunge la card (overo this.state del componente Form)
    if (this.props.editCard) {
      this.props.setCard(this.state)
    }
    else {
      this.props.addCards(this.state)
    }
  }

  componentDidMount(){
    if(this.props.editCard){
    this.setState({
      id: this.props.cardToEdit.id,
      name: this.props.cardToEdit.name,
      email: this.props.cardToEdit.email,
      body: this.props.cardToEdit.body     
    })
  }

  }
  // componentDidUpdate(prevProps, prevState){
  //   console.log("prevProps.cardToEdit.email", prevProps.cardToEdit.email)
  //   console.log("this.state.email", this.state.email)
  //   if(prevProps.cardToEdit.email !== this.state.email)
  //   console.log(this.state)
  // }

  render() {
    console.log("form id", this.state.id)
    return (

      <div className="Form"
        style={this.props.show ? { display: 'block' } : { display: 'none' }}
      >
        <div>
          <div className="closeForm" onClick={() => { this.props.setShow() }}><i class="fa fa-remove"></i></div>
          <form onSubmit={this.handleSubmit} noValidate>
            <ul>
              <li>
                <div><label>ID:</label></div>
                <div>{this.state.id}</div>
              </li>

              <li>
                <div><label>Nome</label></div>
                <div><input type="text" name="name" value={
                  this.state.name} onChange={this.handleChange}></input></div>
              </li>

              <li>
                <div><label>Mail</label></div>
                <div><input type="email" name="email" value={
                  this.state.email} onChange={this.handleChange}></input></div>
              </li>

              <li>
                <div><label>Body</label></div>
                <div><textarea name="body" value={this.state.body} onChange={this.handleChange} /></div>
              </li>

              <li>
                <div id="divBtnComplete"><button onClick={this.handleSubmit}>Complete</button></div>
              </li>
            </ul>
          </form>

        </div>

      </div>

    )
  }
}
