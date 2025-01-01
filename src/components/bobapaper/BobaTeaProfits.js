import React from 'react';
import './layout.css';
import Image from 'next/image';
const BobaTeaProfits = () => {
    return (
        <div className='boba-tea-profits section'>

            <div className='heading'>
                <h2>Boba Tea Profits</h2>
            </div>
            <div className='container'>
                <div className='boba-tea-profits-container'>
                    <div className='image'>
                        <Image src='/images/pie3.png' alt='' width={300} height={300} />
                    </div>
                    <div className='boba-tea-profits-detail'>
                        <div className='item'>
                            <h6 className='red'>Shareholders Equity (25%)</h6>
                            <ul>
                                <li>Dividend to 1000 NFT shareholder.</li>
                            </ul>
                        </div>
                        <div className='item'>
                            <h6 className='purple'>Marketing (40%)</h6>
                            <ul>
                                <li>Promote bubble tea business through social media, local advertising, and events.</li>
                                <li>Influencer collaborations and loyalty programs to attract more customers.</li>
                            </ul>
                        </div>
                        <div className='item'>
                            <h6 className='green'>Operations and Overhead (20%)</h6>
                            <ul>
                                <li>Cover rent, utilities, salaries for staff, packaging and other operational expenses.</li>
                                <li>Invest in equipment maintenance and quality control.</li>
                            </ul>
                        </div>
                        <div className='item'>
                            <h6 className='blue'>Research and Innovation (15%)</h6>
                            <ul>
                                <li>Explore new bubble tea flavors, packaging, or unique selling points.</li>
                                <li>Stay ahead of trends and adapt to customer preferences.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='svg'></div>
        </div>
    );
};

export default BobaTeaProfits;