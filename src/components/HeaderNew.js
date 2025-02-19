'use client';
import Link from 'next/link';
import React, {useState} from 'react';
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
  
const HeaderNew = () => {
    const [menu, setMenu] = useState(false);
    console.log(menu);
    
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const closeMenu = () => {
        setMenu(false);
    }
    return (
        <div>
            <div className='nav-icon' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"/></svg>
            </div>
            <div className='header-new'>
                <span className='item' onClick={() => scrollToSection('main')}>Main</span>
                <span className='item' onClick={() => scrollToSection('community')}>Bobby Community</span>
                <span className='item' onClick={() => scrollToSection('land')}>Shop</span>
                <span className='item' onClick={() => scrollToSection('utilities_of_land')}>Frenzland</span>
                <span className='item' onClick={() => scrollToSection('minigame')}>Bobby mini game</span>
                <span className='item' onClick={() => scrollToSection('media')}>Media is Bobby&apos;s</span>
            </div>
            <div className='header-new-mobile'>
                <div onClick={closeMenu} className='cover' style={{ 
                        transform: menu ? 'translateX(0)' : 'translateX(100%)' 
                    }}></div>
                <div className='body' style={{ 
                        transform: menu ? 'translateX(0)' : 'translateX(100%)' 
                }}>
                    <div className='close-icon' onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18M6 6l12 12"/></svg>
                    </div>
                    <div className='list'>
                        <span className='item' onClick={() => scrollToSection('main')}>Main</span>
                        <span className='item' onClick={() => scrollToSection('community')}>Bobby Community</span>
                        <span className='item' onClick={() => scrollToSection('land')}>Shop</span>
                        <span className='item' onClick={() => scrollToSection('utilities_of_land')}>Frenzland</span>
                        <span className='item' onClick={() => scrollToSection('minigame')}>Bobby mini game</span>
                        <span className='item' onClick={() => scrollToSection('media')}>Media is Bobby&apos;s</span>
                    </div>
                    <div></div>
                </div>
            </div>
            
        </div>
    );
};

export default HeaderNew;