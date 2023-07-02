class Wrozba extends React.Component {

  state = {
    wrozba_id: 1,
    wrozby: ['wrozba 1','wrozba 2', 'wrozba 3'],
    input: ''
  }

  losujWrozbe = () => {
    let new_id = Math.floor(Math.random() * this.state.wrozby.length)
    while(new_id === this.state.wrozba_id){
      new_id = Math.floor(Math.random() * this.state.wrozby.length)
    }
    this.setState({
      wrozba_id: new_id
    })
  }

  handleInputChange = e => {
    this.setState({ 
      input: e.target.value
    })
  }

  addWrozba = () => {
    window.alert("Dodałeś wróżbę! Aktualna lista: " + this.state.wrozby + "," + this.state.input)
    this.setState((prev) => ({ 
      wrozby: [...prev.wrozby, prev.input],
      input: ''
    }))
  }

  render() {
    return (
      <>
        <button onClick = {this.losujWrozbe}>Zobacz wróżbę</button>
        <div>
        <input value = {this.state.input} onChange={this.handleInputChange}/>
        <button onClick = {this.addWrozba}>Dodaj wróżbę</button>
        </div>
        <h1>{this.state.wrozby[this.state.wrozba_id]}</h1>
      </>
    )
  }

}

ReactDOM.render(<Wrozba/>, document.getElementById('root'))
