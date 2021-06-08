
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataValue: [0,0,0],
      dataCheck: [true,true,true],
      dataReduce: [],
      total: 0

    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput = (event) => {
    const value = event.target.value
    const name = event.target.name

    const newData= [...this.state.dataValue]
    newData[name-1] = parseInt(value)

    this.setState({
      ...this.state,
      dataValue: newData
    })
  }

  handleCheck = (event) => {
    const name = event.target.name
    const {dataCheck} = this.state

    var array = dataCheck

    switch(name) {
      case 'checkBoxFirst':
        array[0] = !array[0]
        this.setState({
          data: array
        })
        break
      case 'checkBoxSecond':
        array[1] = !array[1]
        this.setState({
          data: array
        })
        break
      case 'checkBoxThird':
        array[2] = !array[2]
        this.setState({
          data: array
        })
        break
    }
  
  }

  handleSubmit = (action) => {
    const {dataValue, dataCheck, dataReduce} = this.state

    console.log(dataValue)
    console.log(dataCheck)
    // clear data reduce
    this.setState({
      dataReduce: []
    })
    for(var i = 0; i < dataCheck.length; i++) {
      if(dataCheck[i] === true) {

        var arrReduce = dataReduce
        arrReduce.push(dataValue[i])
      }
    }

    var totalProcess = null

    switch(action){
      case '+':
        totalProcess = arrReduce.reduce(this.reducePlus)
        break
      case '-':
        totalProcess = arrReduce.reduce(this.reduceMin)
        break
      case '*':
        totalProcess = arrReduce.reduce(this.reduceKali)
        break
      case '/':
        totalProcess = arrReduce.reduce(this.reduceBagi)
        break
    }

    console.log(totalProcess)

    this.setState({
      total: totalProcess
    })

  }

  reducePlus = (total, num) => {
    return total + num;
  }
  reduceMin = (total, num) => {
    return total - num;
  }
  reduceKali = (total, num) => {
    return total * num;
  }
  reduceBagi = (total, num) => {
    return total / num;
  }

  render() {
    const {valueFirst, valueSecond, valueThird, total} = this.state
    return (
      <div className="App">
        <div className="container-input">
          <input type="text" name={1} value={valueFirst} onChange={this.handleChangeInput} />
          <input type="checkbox" name={"checkBoxFirst"} value={valueFirst} className="checkbox" onChange={this.handleCheck} defaultChecked={true}/>
        </div>

        <div className="container-input">
          <input type="text" name={2} value={valueSecond} onChange={this.handleChangeInput} />
          <input type="checkbox" name="checkBoxSecond" value={valueSecond} className="checkbox" onChange={this.handleCheck} defaultChecked={true}/>
        </div>

        <div className="container-input">
          <input type="text" name={3} value={valueThird} onChange={this.handleChangeInput} />
          <input type="checkbox" name="checkBoxThird" className="checkbox" value={valueThird} onChange={this.handleCheck} defaultChecked={true}/>
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
