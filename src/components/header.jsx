'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Titan_One } from 'next/font/google';
import SignUp from './popup/signUp';
import SignIn from './popup/signIn';
import Image from 'next/image';

const titanOne = Titan_One({
    family: 'Titan One',
    weight: '400',
    subsets: ['latin', 'latin-ext'],

});
const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false); // Mở rộng menu mobile
    const [isSignUp, setSignUp] = useState(false);
    const [isSignIn, setSignIn] = useState(false);
    const handleDropdownUser = () => {
        if (document.getElementById('account').classList.contains('active')) {
            document.getElementById('account').classList.remove('active');
        }else
        {
            document.getElementById('account').classList.add('active');
        }
    }

    const handleDisconnectWallet = () => {
        disConnect();
    }


    const handleNavbarOpen = () => {
        setNavbarOpen(true);
    }
    const handleNavbarClose = () => {
        setNavbarOpen(false);
    }
    const handleLoginClick = () => {
        setSignIn(true); // Mở popup đăng nhập
    };

    const handleSignUpClick = () => {
        setSignUp(true); // Mở popup đăng ký
        setSignIn(false); // Đóng popup đăng nhập
    };

    const handleSignInClick = () => {
        setSignIn(true); // Mở popup đăng nhập
        setSignUp(false); // Đóng popup đăng ký
    };


    const handleCloseClick = () => {
        setSignIn(false); // Đóng popup đăng nhập
        setSignUp(false); // Đóng popup đăng ký
    };

    // getAccount();
    const [accountId, setAccountId] = useState(null);
    async function getAccount() {
        const accounts = await  window.ethereum // Or window.ethereum if you don't support EIP-6963.
          .request({ method: "eth_requestAccounts", params: [{ chainId: "0x1"}] })
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error.
                    // If this happens, the user rejected the connection request.
                    console.log("Please connect to MetaMask.");
                } else {
                    console.error(err);
                }
            });
        setAccountId(accounts[0]);
        console.log(accounts[0]);
    }
    async function disConnect() {
        try {
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
              params: [],
            });
            console.log("Disconnected from wallet:", accounts);
            setAccountId(null);
          } catch (err) {
            console.error(err);
          }
    }
    
    async function changeMainNet() {
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                  {
                    chainId: "0x127"
                  }
                ]
              });
        } catch (error) {
            console.error(error);
        }
    }

    const handleChangeMainNet = () => {
        changeMainNet();
    }

    const handleConnectWallet = () => {
        if ( window.ethereum !== undefined) {
            console.log("MetaMask is installed!");
            console.log(window.ethereum);
            getAccount();
        }
        else {
            alert("Please install MetaMask!");
        }
    }
    return (

            <header>
                <SignUp isActive={isSignUp} onSignInClick={handleSignInClick} onCloseClick={handleCloseClick} />
                <SignIn isActive={isSignIn} onSignUpClick={handleSignUpClick} onCloseClick={handleCloseClick} />
                <div className="nav_sub">
                    <div className="logo_text logo_frenzland">BOBBY</div>
                    <div className="noti">
                    <div className='text'>
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                        <span className={titanOne.className}>$BOBBY</span>
                        <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                    </div>
                    </div>
                    <div className="right">
                    {/* <div className='icon_reward'>
                        <a href='https://app-frenzland.vercel.app/' target='_plank'>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="50px" alt="" />

                        </a>
                    </div> */}
                  
                    
                    { accountId !== null ?
                    <div className="account" id="account" onClick={handleDropdownUser}>
                        <span className='accountId'>{accountId.slice(0, 6) + "..." + accountId.slice(-6)}</span>
                        <div className='avatar'>
                            <Image src="/images/asset/favicon/favicon.png" height={200} width={200} alt="" />
                        </div>
                        <div className='dropdown'>
                            <div className='btn-item'>Infomation</div>
                            <div className='btn-item' onClick={handleDisconnectWallet}>Disconnect</div>
                        </div>
                    </div>
                    :
                    <div className="btn login" onClick={handleConnectWallet} id="connectWallet">
                        <span>Connect</span>
                    </div>}
                    </div>
                </div>
                {/* <nav className={`main ${navbarOpen ? 'active' : ''}`}>
                    <div className="close" onClick={handleNavbarClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </div>
                    <div className="navbar" onClick={handleNavbarOpen}>
                    <svg
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                        />
                    </svg>
                    </div>
                    <ul>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="https://shop.frenzland.com/" target="_blank">Shop</Link>
                    </li>
                    <li>
                        <Link href="">Map</Link>
                    </li>
                    <li>
                        <Link href="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                    <Image width='200' height='200' src="/images/bobbyface.png" alt="" />
                    </ul>
                </nav> */}
            </header>

    );
};

export default Header;