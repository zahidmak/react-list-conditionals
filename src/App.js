import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {


  state = { textLength: 4 , text: "Test" }
  updateTextLengthandText = (event) => {
    let updatedState = { ...this.state }
    updatedState.textLength = event.target.value.length;
    updatedState.text = event.target.value;
    this.setState(updatedState)
  }

  deleteCharHandler = (stringIndex)=>{
    const updatedText = [...this.state.text]; ///NOTE: By using spread operator you are copying the array and not using its reference and hence not modifying the original state
    updatedText.splice(stringIndex,1);
    this.setState({text:updatedText.join(''),textLength: (this.state.textLength-1)});

  }

  

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }

    let charArray = null;
    if(this.state.text.length>0){
      charArray = (
        <div>
        {[...this.state.text].map((char, index) => {
          return  <CharComponent style={style} char={char} key={index} click={()=>this.deleteCharHandler(index)}/>
        })}
       </div>
      );
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>


        <input type="text" onChange={(event) => { this.updateTextLengthandText(event) }} value={this.state.text}/>
        <ValidationComponent length={this.state.textLength} />
        {charArray}
      </div>
    );
  }
}

export default App;
