import React, {Component, Fragment} from 'react';
import Card from './Card';
import API from '../utils/API'

class GameStart extends Component  {
    state = {
        query : "",
        cardArr : []
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
                    // console.log(item.id);
                })
                console.log(cardList);
                // items.map(item => {
                //     this.state.cardArr.id = item.id;
                //     this.state.cardArr.img = item.url;
                //     console.log(this.state.cardArr);
                //     // <Card
                //     //     image = 
                //     // />

                // })
                
            })
            
            .catch(err => console.log(err));

            
        }
    }

    render(){
        return (
            <Fragment>
                <input className="search-query" onChange={this.handleInputChange}/>
                <button className="formSubmit" onClick={this.handleFormSubmit}>Start Game</button>
            </Fragment>
        )
    }
}

export default GameStart; 