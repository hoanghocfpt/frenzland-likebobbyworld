import React from 'react';
import './layout.css';
import CardItem2 from './CardItem2';
const RevenueStreams = () => {
    const data = [
        {
            title: 'Online Sales',
            list: [
                'E-commerce website where customers can order bubble tea online.',
                
            ]
        },
        {
            title: 'Wholesale Shop',
            list: [
                'Partner with other food establishments to supply them with our bubble tea products.',
                
            ]
        },
        {
            title: 'Preorders',
            list: [
                'Events and Pop-ups: Accept preorders for events, festivals, or pop-up stalls.',
            ]
        },
        {
            title: 'Delivery',
            list: [
                'Our physical Bobby Tea shop, where we take orders from walk in or take out also we deliver as well.',
            ]
        }
    ]
    return (
        <div className='revenue-streams section'>
            <div className='heading'>
                <h2>Revenue Streams</h2>
            </div>
            <div className='container'>
                <div className='revenue-streams-container'>
                    <div className='list-card'>
                        {data && data.map((item,index)=>(
                            <CardItem2 key={index} data={item.list} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='svg'></div>
        </div>
    );
};

export default RevenueStreams;