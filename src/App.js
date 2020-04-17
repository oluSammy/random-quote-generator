import React from 'react';

import './App.css';
import quotes from './quotes';
import RandomColor from 'random-color'

class App extends React.Component {
  state={
    color: 'red',
    quotes: quotes[0]
  }

  handleClick = ()=>{
    const randomumber = Math.floor(Math.random() * quotes.length)
    const color = RandomColor().hexString()
    this.setState({
      color: color,
      quotes: quotes[randomumber]
    })
    // console.log(randomumber);
  };

  render(){
    // console.log(quotes);

    return (
      <div className="App">
        <div className="App-header" style={{backgroundColor: this.state.color}}>
          <div className="white-box">
            <div className="quote-box" style={{color: 'blue'}}>
              <p style={{color: this.state.color}}>{this.state.quotes.quote}</p>
            </div>
            <p className="author" style={{color:  this.state.color}}>{this.state.quotes.author}</p>
            <button className="new-quote" onClick={this.handleClick}>New Quote</button>
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
