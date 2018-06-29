import React from 'react';

const Card = props => {
    return (<div key={props.keyId} data-guessed={props.guessed} className="card" onClick={() => props.clicked(props.id, props.guessed)}>
        <img alt={props.title} src={props.url}/>
    </div>)
}

export default Card; 