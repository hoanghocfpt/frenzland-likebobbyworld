
import './page.css';
import Link from 'next/link';
import { Titan_One } from 'next/font/google';
import Image from 'next/image';
import SmartContract from '@/components/home/SmartContract';

const titanOne = Titan_One({
    family: 'Titan One',
    weight: '400',
    subsets: ['latin', 'latin-ext'],

});

const HomePage = () => {
    return (
        <>
            <div className="home">
                <div className="home_container">
                <div className="header_home">
                    <h2>
                    {/* <span className="label">Official Home Base Of</span> */}
                    <span className={`${titanOne.className} heading`}>BOBBY</span>
                    </h2>
                    <p>
                    If you love Bobby or are just getting to know him, you’ve come to the right place! Bobby can be optimistic, adventurous, and always up for a challenge. He&apos;s loveable, charming and has an annoying girlfriend.
                    </p>
                    {/* <a href="https://discord.com/invite/hZnTwenQtp" target='_blank' className="btn_cta">
                    <span>
                        <span>Meet Bobby</span>
       
                    </span>
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        mirror-in-rtl="true"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z" />{" "}
                        </g>
                    </svg>
                    </a> */}
                </div>
                <div className="img_home">
                    <img src="images/bobby4.png" alt="" />
                </div>
                </div>
            </div>
            <div className="minigame">
                <div className="box" />
                {/* <svg class="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 100" fill="none">
                    <path d="M790 40.7817C790 14.9449 769.055 -6 743.218 -6L-109.913 -6C-133.879 -6 -153.95 12.1509 -156.352 35.9959C-159.589 68.1398 -129.978 93.7727 -98.6297 85.9625L51.1001 48.6581C65.3072 45.1184 80.1539 45.0208 94.4064 48.3731L301.424 97.0667C315.22 100.312 329.579 100.325 343.381 97.1071L551.62 48.5494C566.475 45.0855 581.958 45.3695 596.676 49.3758L730.931 85.921C760.686 94.0204 790 71.6189 790 40.7817Z" fill="#FF7A00"/>
                </svg> */}
                {/* <div className="heading">
                <h3>Mini games</h3>
                </div> */}
                <div className="minigame_container">
                
                <Link href="">
                    <div className="card">
                    <div className="img">
                        <img src="images/z5355116003002_24fb6a5b3cd5ae0e34176dfde426b8f6.jpg" alt="" />
                    </div>
                    <div className="text">
                        {/* <div className="title">Coming Soon</div>
                        <div className="des">Something interesting is waiting for you</div> */}
                    </div>
                    </div>
                </Link>
                <Link href="">
                    <div className="card">
                    <div className="img">
                        <img src="images/bobbyblue.png" alt="" />
                    </div>
                    <div className="text">
                        {/* <div className="title">Bobby World - 9632-4821-8717</div>
                        <div className="des">Find Bobby in Fortnite - FFA</div> */}
                    </div>
                    </div>
                </Link>
                <Link href="">
                    <div className="card">
                    <div className="img">
                        <img src="images/z5355116012570_5ad0e8062ef749a7b969957dcf062bb5.jpg" alt="" />
                    </div>
                    <div className="text">
                        {/* <div className="title">Coming Soon</div>
                        <div className="des">Something interesting is waiting for you</div> */}
                    </div>
                    </div>
                </Link>
                {/* <Link href="">moregame</Link> */}
                </div>
                {/* VIDEO TRAILER */}
                <div className="trailer">
                <div className="trailer_container">
                    <div className="dot1 dot" />
                    <div className="dot2 dot" />
                    <div className="heading">
                        <h4>Frenzland</h4>
                        <p>
                        Bobby invites brands and sellers to connect with users establishing their metaverse identity in a fun and original way. Users can enjoy various activities such as creating their own world, entertainment, shopping, and camp fire story telling, while creating unforgettable experiences and developing brand loyalty.
                        </p>
                    </div>
                    <div className="video">
                    <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/S1IMUzyp6UE?si=g83aubaImya19jb0"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                    </div>
                </div>
                </div>
                {/* NEWS */}
                <div className="news">
                    <div className="heading">
                        <h3>Bobby in the news</h3>
                    </div>
                    <div className="news_container">
                        {/* <div className="card">
                            <div className="video">
                                <video src="./videos/news1.mp4" autoPlay loop muted playsInline />
                            </div>
                            <div className="content">
                                <span className="date">11.20.2023</span>
                                <div className="title_post">POP UP MINT!!</div>
                            </div>
                        </div> */}
                        
                        <div className="card">
                            <div className="img">
                                <img src="./images/bobbytea.png" alt="Bobby Coming to Vietnam" />
                            </div>
                            <div className="content">
                                <span className="date">Bobby Tea Coming Soon!</span>
                                <div className="title_post">60 Sec ⏱  Whip Up Instant Bubble Tea At Home! Water + flavor + pearls = Quick, Easy, & Delicious</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="./images/bobbymeta.png" alt="Bobby Coming to Vietnam" />
                            </div>
                            <div className="content">
                                <span className="date">Frenzland BETA Coming Soon</span>
                                <div className="title_post">Create a RWA (Real world Asset) District, promote it, shop with your friends and earn. Opportunity for people to make money where they can&apos;t.</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="./images/z5801035155027_2f8f3e0535390a2ece9b7bb1cdba5b2b.jpg" alt="The 1000 Bobby&apos;s" />
                            </div>
                            <div className="content">
                                <span className="date">Bobby 1000 NFT collection</span>
                                <div className="title_post">Shareholder of Bobby tea brand. Holders will be rewarded from Boba tea sales.</div>
                                <Link href="/bobapaper" className="btn_cta">BOBA PAPER</Link>
                            </div>
                        </div> 

                    </div> 
                </div>

{/* 
                <div className="how-to-buy">
                    <h3 className='heading'>How to buy <span className={titanOne.className}>$BOBBY</span></h3>
                    <div className='container'>
                        <div className='card'>
                            <div className='title'>ADD BASE TO METAMASK</div>
                            <p>You can set up the Metamask Wallet by downloading it from your phone’s app store or adding the browser extension for desktop use.</p>
                        </div>
                        <div className='card'>
                            <div className='title'>LOAD UP ETH</div>
                            <p>Head to <a href='https://app.debridge.finance/deswap' target='_blank'>app.debridge.finance</a>, connect your wallet and choose a network you want to bridge to Base. Remember to leave enough for gas fees.</p>
                        </div>
                        <div className='card'>
                            <div className='title'>BUY $BOBBY</div>
                            <p>Go to Uniswap and import the contract address for $BOBBY (Located below).</p>
                        </div>
                        <div className='card'>
                            <div className='title'>ADD TO WALLET</div>
                            <p>Simply include the $BOBBY contract address in your Metamask Wallet to display your $BOBBY tokens. Quack-Tastic, welcome aboard!</p>
                        </div>
                    </div>
                </div> */}

                <SmartContract />
                <div className='tokenomics'>
                    <h3 className='heading'><span className={titanOne.className}>$BOBBY</span> Tokenomics</h3>
                    <div className='container'>
                        
                        <div className='container2'>
                            <div className='img'>
                                <img src='/images/pie2.png' alt='' />
                            </div>
                            <div className='content'>
                                <h4 className={titanOne.className}>$BOBBY ON BASE SUPPLY</h4>
                                <p>1,000,000,000</p>
                                <h4 className={titanOne.className}>5% AIRDROP & GIVEAWAY</h4>
                                <p>5% of our total supply will be distributed through an airdrop or giveaway.</p>
                                <h4 className={titanOne.className}>3% TEAM | 2% MARKETING/CEX</h4>
                                <p>3% will be used to reward our team of developers, illustrators, and animators as they enhance Bobby on Base. 2% of the funds will be allocated towards marketing efforts and listing on exchanges (CEXes).</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h3 className='heading'><span className={titanOne.className}>BOBBY</span> Tokenomics</h3>
                    <div>
                        <Image src='/images/pie2.png' width={500} height={500} alt='tokenomics'></Image>
                    </div>
                    <div>
                        <h4>1 Billion Supply</h4>
                    </div>
                </div> */}
            </div>
        </>

    );
};

export default HomePage;
