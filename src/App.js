import React, { Component } from 'react';
import './App.css';
import Quotes from './components/Quotes';
import Button from './components/Button';
import Twitter from './components/Twitter';
import { url, colors } from './utilities/index';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      author: "",
      colour: ""
    }
  }

  fetchQuotes() {
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * (data.quotes.length));
        const quotes = data.quotes[index];
        this.setState ({
          quote: quotes.quote,
          author: quotes.author
        });
      })
  }

  randomColor = () => {
    const index = Math.floor(Math.random() * (colors.length));
    // console.log(colors[index]);
    return colors[index];
  }

  onClick = () => {
    this.fetchQuotes();
    this.setState ({
      colour: this.randomColor()
    });
    
  }

  componentDidMount() {
    this.fetchQuotes();
    this.setState ({
      colour: this.randomColor()
    });
    document.body.style.backgroundColor = this.state.colour;
  }  

  render() {
    const { quote, author, colour } = this.state;
    document.body.style.backgroundColor = colour;
    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="col-6 box p-5 rounded" id="quote-box">
          <div>
            <Quotes quote={quote} author={author} colour={colour} />
          </div>
          <div className="buttons d-flex justify-content-between mt-4">
            <Twitter quote={quote} author={author} colour={colour} />
            <Button onClick={this.onClick} colour={colour} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
