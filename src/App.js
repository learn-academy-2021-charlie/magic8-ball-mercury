import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["Here is an answer: No", "Here is an answer: Yes", "Here is an answer: Do it later", "Here is an answer: Ask again later" ],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    let randomNum = Math.floor(Math.random() * 4);
    // ACTION ITEM: Update the answerArray selection
    if (randomNum === 0){
      this.setState({ selectedAnswer: answerArray[0] })
    }
    else if (randomNum === 1){
      this.setState({ selectedAnswer: answerArray[1] })
    }
    else if (randomNum === 2){
      this.setState({ selectedAnswer: answerArray[2] })
    }
    else if (randomNum === 3){
      this.setState({ selectedAnswer: answerArray[3] })
    }
  }

  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input
          className="inputBox"
          type="text"
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question!
        </button>
        <p>{ this.state.selectedAnswer }</p>
      </>
    )
  }
}

export default App
