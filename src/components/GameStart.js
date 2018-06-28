import React, {Component, Fragment} from 'react';
import Card from './Card';
import API from '../utils/API'

class GameStart extends Component  {
    state = {
        query : "",
        cardArr : [],
        cardsGuessed : []
    }
    handleInputChange = event => {
        this.setState({query : event.target.value})
        console.log(this.state.query);
    }
    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.query){
            API.getGifs(this.state.query)
            .then(res => {console.log(res)
                const items = res.data.data;
                const cardList = items.map(item => {
                    const rObj = {
                        id : item.id,
                        url : item.embed_url
                    };
                    return rObj;
                })
                this.setState({cardArr : cardList});
                console.log(this.state.cardArr);

            })
            
            .catch(err => console.log(err));
        }
    }
    render(){
        return (
            <Fragment>
                <input className="search-query" onChange={this.handleInputChange}/>
                <button className="formSubmit" onClick={this.handleFormSubmit}>Start Game</button>
                
                {this.state.cardArr.length ? (
                    <div className="gameWrap">
                    {this.state.cardArr.map(card => (
                        <Card 
                            key={card.id}
                            url={card.url}
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