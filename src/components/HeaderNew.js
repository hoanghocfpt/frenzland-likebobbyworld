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
    return (
        <div>
            <div className='header-new'>
                <span className='item' onClick={() => scrollToSection('main')}>Main</span>
                <span className='item' onClick={() => scrollToSection('community')}>Bobby Community</span>
                <span className='item' onClick={() => scrollToSection('land')}>Shop</span>
                <span className='item' onClick={() => scrollToSection('utilities_of_land')}>Frenzland</span>
                <span className='item' onClick={() => scrollToSection('minigame')}>Bobby mini game</span>
                <span className='item' onClick={() => scrollToSection('media')}>Media is Bobby&apos;s</span>
            </div>
        </div>
    );
};

export default HeaderNew;