import React from 'react';
import ShopIcon from './icons/ShopIcon';
import './cardItem.css';
import WebIcon from './icons/WebIcon';
import ConfettiIcon from './icons/ConfettiIcon';
import TickerIcon from './icons/TickerSale';
const CardItem2 = ({data}) => {
    return (
        <div className='card-2'>
            <div className='icon'>
                {data[0].includes('E-commerce') && <WebIcon />}
                {data[0].includes('Partner') && <ConfettiIcon />}
                {data[0].includes('Events') && <ShopIcon />}
                {data[0].includes('deliver') && <TickerIcon />}
            </div>
            <div className='list'>
                <ul>
                    {data && data.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardItem2;