import React, {Component, Fragment} from 'react';
import Card from './Card';
import API from '../utils/API'

class GameStart extends Component  {
    state = {
        query : "",
        cardArr : [],
        cardsGuessed : [],
        cardsRemaining : [],
        highScore : 0,
        score : 0
    }
    //  Updates input value to state.query
    handleInputChange = event => {
        this.setState({query : event.target.value})
        if(event.keyCode === "a"){
            // this.handleFormSubmit(event)
        }
    }
    //  when query input is active, 'ENTER/RETURN' press will automatically handleFormSubmit
    submitCheck = event => {
        if(event.key === "Enter"){
            this.handleFormSubmit(event);
        }
    }

    //  runs once GIPHY API call happens
    //  defines state based on the results returned by GIPHY / starts new game
    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.query){
            API.getGifs(this.state.query)
            .then(res => {
                const items = res.data.data;
                const cardList = items.map(item => {
                    const rObj = {
                        id : item.id,
                        keyId : item.id,
                        url : item.images.downsized.url,
                        title : item.title,
                        guessed: false

                    };
                    return rObj;
                })
                this.setState({
                    cardArr : cardList, 
                    cardsRemaining : cardList,
                    score : 0
            });
                

            })
            
            .catch(err => console.log(err));
        }
    }

    //  Checks if card has been clicked
    
    handleCardClick = (id , clicked) => {
        const clickedKey = this.state.cardsRemaining.find(item => item.id === id);
        //  if yes, resets game
        if(clickedKey === undefined){
            this.setState({
                score : 0,
                cardsRemaining : this.state.cardArr
            });
        //  if no, removes from cardsRemaining array, updates high score if necessary
        } else {
            const cardsUpdated = this.state.cardsRemaining.filter(item => item.id !== id);
            let highScore = this.state.highScore;
            if(this.state.score + 1 > highScore){
                highScore = this.state.score + 1;
            }
            this.setState({
                cardsRemaining  : cardsUpdated,
                score : this.state.score + 1,
                highScore : highScore
            });

        }

    }

    render(){
        return (
            <Fragment>
                <div className="header-wrap">
                    <div className="header-side">
                        <p className="score">Score <span>{this.state.score}</span></p>
                    </div>
                    <div className="header-center">
                        <input className="search-query" placeholder="SEARCH GIFS" onKeyPress={this.submitCheck} onChange={this.handleInputChange}/>
                        <button className="formSubmit" onClick={this.handleFormSubmit}>Start Game</button>
                    </div>
                    <div className="header-side">
                    <p className="high-score"><span> {this.state.highScore} </span> Record</p>
                    </div>
                </div>
                {this.state.cardArr.length ? (
                    <div className="gameWrap">
                    {this.state.cardArr.sort(function(){return 0.5 - Math.random()}).map(card => (
                        <Card
                            id={card.id} 
                            key={card.id}
                            url={card.url}
                            guessed={card.guessed}
                            clicked={this.handleCardClick}
                        />
                    ))}
                </div>
                ) : (
                    <h2>Search for gifs to start your game!</h2>
                )
                }

            </Fragment>
        )
    }
}

export default GameStart; 