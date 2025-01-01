import React from 'react';
import './layout.css';
import Image from 'next/image';
const Frenzland = () => {
    return (
        <div className='frenzland section'>

            <div className='heading'>
                <h2>FRENZLAND</h2>
            </div>
            <div className='container'>
                <div className='frenzland-container'>
                    <div className='description'>
                        <Image src='/images/svg3.svg' alt='Frenzland' width={1000} height={300} />
                        <p>Frenzland Metaverse Mall has over 200 stores offering factory direct bulk products like food, garments, furniture, luxury items, customized clothing, and toys. Enjoy affordable prices, high quality, and doorstep delivery. Monetize billboards around the mall, especially on top where everyone watches artists perform on the concert stage.</p>
                    </div>
                    <div className='frenzland-list'>
                            <ul>
                                <li>Bobby Avatars: Holding an NFT grants access to Frenzland metaverse with perks and different mall departments. Your NFT becomes your unique avatar.</li>
                                <li>Exclusive Airdrops: Limited edition tapioca NFTs are randomly airdropped to holders for selling or collecting.</li>
                                <li>Exclusive Airdrops: Limited edition tapioca NFTs are randomly airdropped to holders for selling or collecting.</li>
                                <li>Bubble Tea Quest: Complete quests to find bubble tea drinks in the mall, adding to your collection and earning rewards.</li>
                                <li>Real-Life Redemption: Use earned NFTs/token to purchase real-life bubble tea online or in shops, bridging virtual and real worlds.</li>
                                <li>Loyalty Rewards: Earn tapioca NFTs based on activity and purchases, increasing engagement and NFT value.</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className='svg'></div>
        </div>
    );
};

export default Frenzland;