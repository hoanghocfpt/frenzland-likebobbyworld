import React from 'react';
import './cardItem.css';
const CardItem = ({time,list}) => {
    return (
        <div className='carditem'>
            <div className='time'>
                <span className='quarters'>{time.quarters}</span>
                <div className='date'>
                    <span>{time.date.start}</span>
                    <span>-</span>
                    <span>{time.date.end}</span>
                </div>
            </div>
            <div className='list'>
                <ol>
                    {list && list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default CardItem;