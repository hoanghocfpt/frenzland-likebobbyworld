import Image from 'next/image';
import React from 'react';
import './layout.css';
const NFTMintingRewards = () => {
    return (
        <div className='nftmintingrewards section'>
            <div className='heading'>
                <h2>NFT Minting Rewards</h2>
                <p>Each NFT owner will get exclusive access to our instant Bobby Tea, Frenzland metaverse, rev share, shop pre-opening, and discounts on all drinks.</p>
            </div>
            <div className='container'>
                <div className='nftmintingrewards-container'>
                    <div className='rewards'>
                        <div className='item'>
                            <span>X15</span>
                            <h6>FREE BOBBA<br></br> CARE PACKAGE</h6>
                        </div>
                        <div className='item'>
                            <span>X50</span>
                            <h6>50% OFF<br></br> ON ALL ORDERS</h6>
                        </div>
                    </div>
                    <div className='image'>
                        <Image src='/images/bobbydrinkboba.png' alt='' width={300} height={300} />
                    </div>
                </div>
                <div className='note'>
                    <p>*Reward Starts When Mint Is Completed</p>
                </div>
            </div>
        </div>
    );
};

export default NFTMintingRewards;