import React from 'react';
import './CardList.css'
import Card from './Card';
import { Monster } from '../App';

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({monsters}: CardListProps) => {

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