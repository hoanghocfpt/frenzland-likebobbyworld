import ProductItem from '@/components/productItem';
import React from 'react';
import './page.css';
const MarketplacePage = () => {
    return (
        <div className='marketplace_wrapper'>
            <header>
                <h2>Bobby Store</h2>
            </header>
            <div className="marketplace">
                <div className="heading">
                    <h3>New arrivals</h3>
                    <p>Explore bobby world and have fun by investing in real estate, or owning a plot of land.</p>
                    
                </div>
                <div className="marketplace_container">
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                </div>
            </div>
        </div>
    );
};

export default MarketplacePage;