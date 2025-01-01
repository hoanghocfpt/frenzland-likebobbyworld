import Collection from '@/components/bobapaper/Collection';
import React from 'react';
import './layout.css';
import NFTMintingRewards from '@/components/bobapaper/NFTMintingRewards';
import Roadmap from '@/components/bobapaper/Roadmap';
import BobaTeaProfits from '@/components/bobapaper/BobaTeaProfits';
import RevenueStreams from '@/components/bobapaper/RevenueStreams';
import Demo from '@/components/bobapaper/Frenzland';
import Frenzland from '@/components/bobapaper/Frenzland';
const HomePage = () => {
    return (
        <div className='background'>
            <Collection />
            <NFTMintingRewards />
            <Roadmap />
            <BobaTeaProfits />
            <RevenueStreams />
            <Frenzland />
        </div>
    );
};

export default HomePage;