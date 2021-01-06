
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueFirst: '',
      valueSecond: '',
      valueThird: '',
      checkBoxFirst: true,
      checkBoxSecond: true,
      checkBoxThird: true,
      total: 0

    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleCheck = (event) => {
    const name = event.target.name
    switch(name) {
      case 'checkBoxFirst':
        this.setState({
          checkBoxFirst : !this.state.checkBoxFirst
        })
        break
      case 'checkBoxSecond':
        this.setState({
          checkBoxSecond : !this.state.checkBoxSecond
        })
        break
      case 'checkBoxThird':
        this.setState({
          checkBoxThird : !this.state.checkBoxThird
        })
        break
    }
  
  }

  handleSubmit = (action) => {
    const {valueFirst, valueSecond, valueThird, checkBoxFirst, checkBoxSecond, checkBoxThird} = this.state

    switch(action){
      case '+':
        if(!checkBoxFirst){
          const totalValue = (parseInt(valueSecond) + parseInt(valueThird))
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond) {
          const totalValue = (parseInt(valueFirst) + parseInt(valueThird))
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxThird) {
          const totalValue = (parseInt(valueFirst) + parseInt(valueSecond))
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxSecond) {
          const totalValue = valueThird
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxThird) {
          const totalValue = valueSecond
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxThird) {
          const totalValue = valueFirst
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxSecond && !checkBoxThird) {
          const totalValue = 0
          this.setState({
            total : totalValue
          })
        } else {
          const totalValue = (parseInt(valueFirst) + parseInt(valueSecond) + parseInt(valueThird))
          this.setState({
            total : totalValue
          })
        }
        break
      case '-':
        if(!checkBoxFirst){
          const totalValue = (valueSecond - valueThird)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond) {
          const totalValue = (valueFirst - valueThird)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxThird) {
          const totalValue = (valueFirst - valueSecond)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxSecond) {
          const totalValue = valueThird
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxThird) {
          const totalValue = valueSecond
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxThird) {
          const totalValue = valueFirst
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxSecond && !checkBoxThird) {
          const totalValue = 0
          this.setState({
            total : totalValue
          })
        } else {
          const totalValue = (valueFirst - valueSecond - valueThird)
          this.setState({
            total : totalValue
          })
        }
        break
      case '*':
        if(!checkBoxFirst){
          const totalValue = (valueSecond * valueThird)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond) {
          const totalValue = (valueFirst * valueThird)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxThird) {
          const totalValue = (valueFirst * valueSecond)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxSecond) {
          const totalValue = valueThird
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxThird) {
          const totalValue = valueSecond
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxThird) {
          const totalValue = valueFirst
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxSecond && !checkBoxThird) {
          const totalValue = 0
          this.setState({
            total : totalValue
          })
        } else {
          const totalValue = (valueFirst * valueSecond * valueThird)
          this.setState({
            total : totalValue
          })
        }
        break
      case '/':
        if(!checkBoxFirst){
          const totalValue = (valueSecond / valueThird)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond) {
          const totalValue = (valueFirst / valueThird)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxThird) {
          const totalValue = (valueFirst / valueSecond)
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxSecond) {
          const totalValue = valueThird
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxFirst && !checkBoxThird) {
          const totalValue = valueSecond
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxThird) {
          const totalValue = valueFirst
          this.setState({
            total : totalValue
          })
        } else if(!checkBoxSecond && !checkBoxSecond && !checkBoxThird) {
          const totalValue = 0
          this.setState({
            total : totalValue
          })
        } else {
          const totalValue = (valueFirst / valueSecond / valueThird)
          this.setState({
            total : totalValue
          })
        }
        break
    }

  }

  render() {
    const {valueFirst, valueSecond, valueThird, checkBoxFirst, checkBoxSecond, checkBoxThird, total} = this.state
    return (
      <div className="App">
        <div className="container-input">
          <input type="text" name="valueFirst" value={valueFirst} onChange={this.handleChangeInput} />
          <input type="checkbox" name="checkBoxFirst" className="checkbox" onChange={this.handleCheck} defaultChecked={checkBoxFirst}/>
        </div>

        <div className="container-input">
          <input type="text" name="valueSecond" value={valueSecond} onChange={this.handleChangeInput} />
          <input type="checkbox" name="checkBoxSecond" className="checkbox" onChange={this.handleCheck} defaultChecked={checkBoxSecond}/>
        </div>

        <div className="container-input">
          <input type="text" name="valueThird" value={valueThird} onChange={this.handleChangeInput} />
          <input type="checkbox" name="checkBoxThird" className="checkbox" onChange={this.handleCheck} defaultChecked={checkBoxThird}/>
        </div>
        <div className="container-input">
          <button onClick={()=>this.handleSubmit("+")}>+</button>
          <button onClick={()=>this.handleSubmit("-")}>-</button>
          <button onClick={()=>this.handleSubmit("*")}>x</button>
          <button onClick={()=>this.handleSubmit("/")}>/</button>
        </div>
        
        <p className="total">Total : {total}</p>
      
      </div>
    );
  }
}

export default App
