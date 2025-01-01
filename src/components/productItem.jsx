
import React from 'react';
import './productItem.css';

const ProductItem = () => {
    return (
        <div className='product_item'>
            <div className="img">
                <img src="/images/products/product1.jpg" alt="" />
            </div>
            <div className='content'>
                <div className="name">Product Name</div>
                <div className="price">0.000 ETH</div>
            </div>
        </div>
    );
};

export default ProductItem;