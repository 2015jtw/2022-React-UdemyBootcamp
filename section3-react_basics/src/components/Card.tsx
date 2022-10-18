import React, { Component } from 'react';
import './Card.css'
import { Monster } from '../App';

type CardProps = {
    monster: Monster;
}

const Card = ({monster}: CardProps) => {

    const {id, name, email} = monster;

    return(
        <div className="card">
            <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;