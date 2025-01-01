import Image from 'next/image';
import React from 'react';
import './layout.css';
const Collection = () => {
    return (
        <div className='collection section'>
            <div className='heading'>
                <h2>Collection</h2>
                <p>A collection built with utilities and community, featuring 1000 Bobby, which will be rewarded from our boba tea sales.</p>
            </div>
            <div className='container'>
                <div className='collection-container'>
                    <Image src='/images/banner.png' alt='Collection' width={1920} height={411.68} />
                </div>
            </div>
        </div>
    );
};

export default Collection;