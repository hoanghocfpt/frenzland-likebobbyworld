
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
            {/* video is banner */}
            <div className='video_banner_fullscreen'>
                <div className="header_home">
                    <h2>
                    {/* <span className="label">Official Home Base Of</span> */}
                    <span className={`${titanOne.className} heading`}>BOBBY</span>
                    </h2>
                    <p>
                    Meet Bobby, the Prince of Boba Tea. This is it! He loves to shop, has a playful heart, and is always up for some crazy, fun parties. Bobby&apos;s mission is to power up the metaverse with Web3. In Frenzland, everyone can have a blast and make new friends while exploring their world, all thanks to Web3.
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
                <div className="container">
                    <video autoPlay loop muted playsInline>
                        <source src="./videos/banner.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* <div id='main' className="home">
                <div className="home_container">
                <div className="header_home">
                    <h2>
                    <span className="label">Official Home Base Of</span>
                    <span className={`${titanOne.className} heading`}>BOBBY</span>
                    </h2>
                    <p>
                    If you love Bobby or are just getting to know him, you’ve come to the right place! Bobby can be optimistic, adventurous, and always up for a challenge. He&apos;s loveable, charming and has an annoying girlfriend.
                    </p>
                    <a href="https://discord.com/invite/hZnTwenQtp" target='_blank' className="btn_cta">
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
                    </a>
                </div>
                <div className="img_home">
                    <img src="images/bobby_pikachu.svg" alt="" />
                </div>
                </div>
            </div> */}
            <div className="minigame">
                {/* <div className="box" /> */}
                {/* <svg class="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 100" fill="none">
                    <path d="M790 40.7817C790 14.9449 769.055 -6 743.218 -6L-109.913 -6C-133.879 -6 -153.95 12.1509 -156.352 35.9959C-159.589 68.1398 -129.978 93.7727 -98.6297 85.9625L51.1001 48.6581C65.3072 45.1184 80.1539 45.0208 94.4064 48.3731L301.424 97.0667C315.22 100.312 329.579 100.325 343.381 97.1071L551.62 48.5494C566.475 45.0855 581.958 45.3695 596.676 49.3758L730.931 85.921C760.686 94.0204 790 71.6189 790 40.7817Z" fill="#FF7A00"/>
                </svg> */}
                {/* <div className="heading">
                <h3>Mini games</h3>
                </div> */}
                {/* <div className="minigame_container">
                
                    <Link href="">
                        <div className="card">
                        <div className="img">
                            <img src="images/z5355116003002_24fb6a5b3cd5ae0e34176dfde426b8f6.jpg" alt="" />
                        </div>
                        <div className="text">
                            <div className="title">Coming Soon</div>
                            <div className="des">Something interesting is waiting for you</div>
                        </div>
                        </div>
                    </Link>
                    <Link href="">
                        <div className="card">
                        <div className="img">
                            <img src="images/bobbyblue.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="title">Bobby World - 9632-4821-8717</div>
                            <div className="des">Find Bobby in Fortnite - FFA</div>
                        </div>
                        </div>
                    </Link>
                    <Link href="">
                        <div className="card">
                        <div className="img">
                            <img src="images/z5355116012570_5ad0e8062ef749a7b969957dcf062bb5.jpg" alt="" />
                        </div>
                        <div className="text">
                            <div className="title">Coming Soon</div>
                            <div className="des">Something interesting is waiting for you</div>
                        </div>
                        </div>
                    </Link>
                <Link href="">moregame</Link>
                </div> */}
                {/* VIDEO TRAILER */}
                {/* <div className="trailer">
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
                </div> */}
                {/* Community */}
                <div id='community' className="community">
                    <div className="heading">
                        <h3>Bobby Community</h3>
                    </div>
                    <div className="community_container">
                        <a href='' target='_blank' className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.888 7.335a5.13 5.13 0 0 0-2.893-2.418a9 9 0 0 0-2.275-.508q-.284.504-.508 1.038a15 15 0 0 0-4.56 0a11 11 0 0 0-.519-1.038c-.752.082-1.493.249-2.208.497a5.12 5.12 0 0 0-2.904 2.44a16.18 16.18 0 0 0-1.91 9.717a16.6 16.6 0 0 0 4.98 2.528a4.34 4.34 0 0 0 1.104-1.777q-.81-.304-1.557-.74c-.089-.122.254-.32.364-.354a11.83 11.83 0 0 0 10.037 0c.1 0 .453.232.364.354c-.441.342-1.424.585-1.59.828a7.4 7.4 0 0 0 1.105 1.69a16.6 16.6 0 0 0 4.99-2.53a16.23 16.23 0 0 0-2.02-9.727M8.669 14.7a1.943 1.943 0 0 1-1.92-1.955a1.943 1.943 0 0 1 1.92-1.91a1.94 1.94 0 0 1 1.933 1.965a1.943 1.943 0 0 1-1.933 1.9m6.625 0a1.943 1.943 0 0 1-1.932-1.944a1.932 1.932 0 1 1 3.865.034a1.93 1.93 0 0 1-1.933 1.899z"></path></svg>
                                <span>Discord</span>
                            </a>
                        <a href='' target='_blank' className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M22 11.939a26.5 26.5 0 0 0-.41-4.801a2.5 2.5 0 0 0-1.803-1.714a61 61 0 0 0-7.81-.41c-2.609-.03-5.217.11-7.808.42a2.52 2.52 0 0 0-1.76 1.76a26.4 26.4 0 0 0-.408 4.8c-.01 1.61.127 3.216.409 4.8a2.56 2.56 0 0 0 1.78 1.782c2.592.303 5.2.44 7.81.409a59 59 0 0 0 7.787-.41a2.52 2.52 0 0 0 1.759-1.758c.307-1.608.46-3.242.454-4.878m-7.411.582l-4.005 2.271a.53.53 0 0 1-.785-.464V9.616a.52.52 0 0 1 .785-.454l4.137 2.378a.52.52 0 0 1-.022.908z"></path></svg>
                                <span>Youtube</span>
                            </a>
                        <a href='' target='_blank' className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"></path></svg>
                                <span>Facebook</span>
                            </a>
                        <a href='' target='_blank' className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.357 7.75a.537.537 0 0 0-.495-.516a4.7 4.7 0 0 1-2.415-.938a4.85 4.85 0 0 1-1.887-3.3a.54.54 0 0 0-.517-.496h-2.108a.517.517 0 0 0-.517.527v12.59a2.794 2.794 0 0 1-2.974 2.762a2.815 2.815 0 0 1-2.51-3.711A2.836 2.836 0 0 1 9.93 12.78a.506.506 0 0 0 .558-.506V9.807s-.896-.063-1.202-.063a5.27 5.27 0 0 0-4.101 1.93a5.8 5.8 0 0 0-1.37 2.52a5.86 5.86 0 0 0 2.14 6.072A5.93 5.93 0 0 0 9.591 21.5q.451 0 .896-.063A5.95 5.95 0 0 0 13.8 19.78a5.84 5.84 0 0 0 1.75-4.133V8.71a7.84 7.84 0 0 0 4.218 1.613a.517.517 0 0 0 .548-.527V7.751z"></path></svg>
                            <span>TikTok</span>
                        </a>
                        <a href='' target='_blank' className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"></path></svg>
                            <span>X</span>
                        </a>
                        <a href='' target='_blank' className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M3.39.787A2.604 2.604 0 0 0 .786 3.39v6.944a2.604 2.604 0 0 0 2.604 2.604h6.944a2.604 2.604 0 0 0 2.603-2.604V3.39A2.604 2.604 0 0 0 10.334.787zm7.693 2.607a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.22 1.388a2.08 2.08 0 1 0 0 4.16a2.08 2.08 0 0 0 0-4.16m-3.081 2.08a3.08 3.08 0 1 1 6.16 0a3.08 3.08 0 0 1-6.16 0" clipRule="evenodd"></path></svg>
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className="community_container">
                        <a href='' target='_blank' className="item no_icon">
                            <span>Community</span>
                        </a>
                    </div>
                </div>
                {/* Land NFT */}
                <div id='land' className="land">
                    <div className="heading">
                        <h3>Land NFT</h3>
                    </div>
                    <div className="land_container">
                        <div className="description">
                            <p>District NFTs, with 3 different categories, allow you to own industrial, commercial, and residential facilities that form the foundation of the economic system within Frenzland.</p>
                            <div className='button'>
                                <Link href='/land' className='btn_cta'>Buy The Land</Link>
                            </div>
                        </div>
                        <div className='img'>
                            <img src='./images/land_district1.jpg' alt='Land NFT' />
                        </div>
                    </div>
                </div>
                {/* Currency flow */}
                <div id='currency' className="currency">
                    <div className="heading">
                        <h3>Currency Flow</h3>
                    </div>
                    <div className="currency_container">
                        <div className='item'>
                            <div className='img'>
                                <img src='./images/bobby_gold.svg' alt='Bobby Tea' />
                            </div>
                            <span className='title'>$BOBBY</span>
                            <ul className='list'>
                                <li>In-game item</li>
                                <li>Mini-game reward</li>
                            </ul>
                        </div>
                        <div className='left_right'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 16 16"><path fill={'white'} fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"></path></svg>
                        </div>
                        <div className='item'>
                            <div className='img'>
                                <img src='./images/bobby_gold.svg' alt='Bobby Tea' />
                            </div>
                            <span className='title'>$BOBBY</span>
                            <ul className='list'>
                                <li>Utility token</li>
                                <li>Means for exchange</li>
                            </ul>
                        </div>
                        <div className='left_right'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 16 16"><path fill={'white'} fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"></path></svg>
                        </div>
                        <div className='item'>
                            <div className='img'>
                                <img src='./images/bobby_gold.svg' alt='Bobby Tea' />
                            </div>
                            <span className='title'>$BOBBY</span>
                            <ul className='list'>
                                <li>Utility token</li>
                                <li>Defi staking</li>
                            </ul>
                        </div>
                        <div className='left_right'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 16 16"><path fill={'white'} fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"></path></svg>
                        </div>
                        <div className='item'>
                            <div className='img'>
                                <img src='./images/bobby_gold.svg' alt='Bobby Tea' />
                            </div>
                            <span className='title'>$BOBBY</span>
                            <ul className='list'>
                                <li>Utility token</li>
                                <li>Key currency in <br/> Bobby Platform</li>
                            </ul>
                        </div>
                        
                        
                        
                    </div>
                </div>
                {/* Utilities of land NFT */}
                <div id='utilities_of_land' className="utilities_of_land">
                    <div className="heading">
                        <h3>Utilities of Land NFT</h3>
                    </div>
                    <div className="utilities_of_land_container">
                        <div className="item">
                            <div className="img">
                                <img src="./images/bobby_gold.svg" alt="Land NFT" />
                            </div>
                            <span className="title">Exclusive incentive</span>
                        </div>
                        <div></div>
                        <div className="item">
                            <div className="img">
                                <img src="./images/bobby_gold.svg" alt="Land NFT" />
                            </div>
                            <span className="title">Rental service</span>
                        </div>
                        <div></div>
                        <div className="item">
                            <div className="img">
                                <img src="./images/bobby_gold.svg" alt="Land NFT" />
                            </div>
                            <span className="title">On/Off mode</span>
                        </div>
                        <div></div>
                        <div className="item">
                            <div className="img">
                                <img src="./images/bobby_gold.svg" alt="Land NFT" />
                            </div>
                            <span className="title">Level up and maximize earning</span>
                        </div>
                        <div></div>
                        <div className="item">
                            <div className="img">
                                <img src="./images/bobby_gold.svg" alt="Land NFT" />
                            </div>
                            <span className="title">Property value appreciation like real world</span>
                        </div>
                    </div>
                </div>
                {/* $BOBBY */}
                <div id='bobby_token' className="bobby_token">
                    <div className="bobby_token_container">
                        <div className="description">
                            <div className="heading">
                                <h3>$BOBBY</h3>
                            </div>
                            <p>$BOBBY is native token that enhances Frenzland experience while empowering Items ecosystem. Upgrade your District with $BOBBY for value accrual in earning or exchange your profits from District into $BOBBY.</p>
                            {/* <div className='button'>
                                <a href='' className='btn_cta'>Binance</a>
                                <a href='' className='btn_cta'>OKX</a>
                                <a href='' className='btn_cta'>Bitget</a>
                                <a href='' className='btn_cta'>BingX</a>
                            </div> */}
                        </div>
                        <div className='img'>
                            <img src='./images/bobby_gold.svg' alt='BOBBY' />
                        </div>
                    </div>
                </div>
                {/* Economy */}
                <div id='economy' className="economy">
                    <div className="heading">
                        <h3>Economy</h3>
                    </div>
                    <div className="economy_container">
                        <div className="land">
                            <div className='item'>
                                <div className="img">
                                    <img src="./images/land_district1.jpg" alt="Land NFT" />
                                </div>
                                <div className='name'>District 1</div>
                                <div className='line'>
                                    <span>Passive Income</span>
                                    <div className='line1'></div>
                                    <div className='line2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9l-7 7l-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="img">
                                    <img src="./images/land_district2.jpg" alt="Land NFT" />
                                </div>
                                <div className='name'>District 2</div>
                                <div className='line'>
                                    <span>Revenue Share</span>
                                    <div className='line1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5l7 7l-7 7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="img">
                                    <img src="./images/land_district3.jpg" alt="Land NFT" />
                                </div>
                                <div className='name'>District 3</div>
                                <div className='line'>
                                    <span>Revenue Share</span>
                                    <div className='line1'></div>
                                    <div className='line2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 15l7-7l7 7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='holder'>
                            <span>Holder</span>
                        </div>
                    </div>
                </div>
                {/* NEWS */}
                <div id='minigame' className="news">
                    <div className="heading">
                        <h3>News</h3>
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
                                {/* <div className="title_post">60 Sec ⏱  Whip Up Instant Bubble Tea At Home! Water + flavor + pearls = Quick, Easy, & Delicious</div> */}
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="./images/bobbymeta.png" alt="Bobby Coming to Vietnam" />
                            </div>
                            <div className="content">
                                <span className="date">Frenzland BETA Coming Soon</span>
                                {/* <div className="title_post">Create a RWA (Real world Asset) District, promote it, shop with your friends and earn. Opportunity for people to make money where they can&apos;t.</div> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="./images/z5801035155027_2f8f3e0535390a2ece9b7bb1cdba5b2b.jpg" alt="The 1000 Bobby&apos;s" />
                            </div>
                            <div className="content">
                                <span className="date">Bobby 1000 NFT collection</span>
                                {/* <div className="title_post">Shareholder of Bobby tea brand. Holders will be rewarded from Boba tea sales.</div> */}
                                {/* <Link href="/bobapaper" className="btn_cta">BOBA PAPER</Link> */}
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

                {/* <SmartContract /> */}
                {/* <div className='tokenomics'>
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
                </div> */}
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
