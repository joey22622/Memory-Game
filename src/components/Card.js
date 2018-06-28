import React from 'react';

const Card = props => {
    return (<div key={props.id} className="card" onClick={props.selectFunction}>
        <img src={props.url}/>
    </div>)
}

export default Card; 