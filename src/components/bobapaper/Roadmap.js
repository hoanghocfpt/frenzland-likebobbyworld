import React from 'react';
import CardItem from './CardItem';
import './layout.css';
const Roadmap = () => {
    const data = [
        {
            quarters: 'Q3',
            date: {
                start: 'July 2024',
                end: 'Sep 2024'
            },
            list: [
                'Launch Bobby Tea website',
                'Whitelist mint',
                'Public mint',
                'Marketing',
                'Launch Bobby Tea popups'
            ]
        },
        {
            quarters: 'Q4',
            date: {
                start: 'Oct 2024',
                end: 'Dec 2024'
            },
            list: [
                'Secure partnerships with restaurants',
                'Launch Bobby Tea popups',
                'Launch Bobby Tea shop in Frenzland metaverse',
                'Menu and drinks design'
            ]
        },
        {
            quarters: 'Q1',
            date: {
                start: 'Jan 2025',
                end: 'Mar 2025'
            },
            list: [
                'Build out payment system, rewards system, and wallet to receive payments from customers',
                'Finish designs with architect',
                'Location Scouting '
            ]
        },
        {
            quarters: 'Q2',
            date: {
                start: 'Apr 2025',
                end: 'Jun 2025'
            },
            list: [
                'Sign leases and start building',
                'Test out reward payment system',
                'Bobby Tea Shop Grand Opening',
            ]
        }
    ]
    return (
        <div className='roadmap section'>
            <div className='heading'>
                <h2>Roadmap</h2>
            </div>
            <div className='container'>
                <div className='roadmap-container'>
                    <div className='list-card'>
                        {data && data.map((item,index)=>(
                            <CardItem key={index} time={item} list={item.list}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='svg'></div>
        </div>
    );
};

export default Roadmap;