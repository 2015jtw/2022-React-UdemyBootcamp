import React from 'react';
import './CardList.css'
import Card from './Card';

const CardList = ({monsters}) => {

    return (
        
        <div className='card-list'>
            {monsters.map((monster) => (
                <Card
                    monster={monster}
                />
            ))}
        </div>
    )
}


export default CardList;