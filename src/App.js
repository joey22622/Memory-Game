import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import GameStart from './components/GameStart';
import API from './utils/API';



class App extends Component {
  state = {
    cards: [],
    query: ""
  };

componentDidMount(){

}
loadGame(query){
    API.getGifs("dogs")
    .then(res => console.log(res))
    .catch(err => console.log(err));
}



  render() {
    return (
      <div className="content-wrap">
        <GameStart/>
        <h2>dummy text</h2>
      </div>
    );
  }
}

export default App;
