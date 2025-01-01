import './page.css'
import MarqueeText from './MarqueeText';
import UserDropDown from './UserDropDown';
import { Titan_One } from 'next/font/google';
import Link from 'next/link';
const titanOne = Titan_One({
    family: 'Titan One',
    weight: '400',
    subsets: ['latin', 'latin-ext'],

});
const Header = () => {
    return (
        <>
            <header>
                <div className="nav_sub">
                    <Link href='/'>
                        <div className={`${titanOne.className} logo_text logo_frenzland`}>BOBBY</div>
                    </Link>
                    <MarqueeText></MarqueeText>
                    <div className="right">
                    {/* <UserDropDown></UserDropDown> */}
                    {/* <div className='icon_reward'>
                        <Link href='/'>
                        <img src="/images/head/BOBBY_HEAD_1.png" width="50px" alt="" />
                        </Link>
                    </div> */}
                    <div className='btn'>
                        <a href='/'>BOBBY</a>
                    </div>
                    </div>
                </div>
            </header> 
        </>
    );  
};

export default Header;