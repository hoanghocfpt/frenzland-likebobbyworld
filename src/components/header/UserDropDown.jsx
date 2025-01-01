'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ConnectButton from '../hooks/ConnectButton';
import { useWeb3ModalAccount,useDisconnect,useWeb3Modal } from '@web3modal/ethers5/react';

const UserDropDown = () => {
    const { open } = useWeb3Modal();
    const { isConnected, address } = useWeb3ModalAccount();
    console.log(isConnected, address);
    const { disconnect  } = useDisconnect();
    const handleDropdownUser = () => {
        if (document.getElementById('account').classList.contains('active')) {
            document.getElementById('account').classList.remove('active');
        }else
        {
            document.getElementById('account').classList.add('active');
        }
    }

    const handleDisconnectWallet = () => {
        disconnect();
    }

    
   
    return (
        <>
            { isConnected == true?
            <div className="account" id="account" onClick={handleDropdownUser}>
                <span className='accountId'>{address.slice(0, 6) + '...' + address.slice(-6)}</span>
                <div className='dropdown'>
                    <div className='btn-item' onClick={()=> {open({ view: 'Account' })}}>Infomation</div>
                    <div className='btn-item' onClick={handleDisconnectWallet}>Disconnect</div>
                </div>
            </div>
            :
            <ConnectButton></ConnectButton>}
        </>
    );
};

export default UserDropDown;