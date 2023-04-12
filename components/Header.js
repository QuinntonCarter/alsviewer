import React from 'react';
import { Flex } from '@chakra-ui/react';
import headerStyles from '../styles/Header.module.css';
import apexLegendsLogo from '../public/apex-legends-logo.svg';
import Image from 'next/image';

const Header = () => {
    return (
        <Flex justifyContent={'center'}>
            <h1 className={headerStyles.title}> 
                {/* <span> Apex Legends </span> */}
                <Image
                    title='Apex Legends logo and IP trademark Electronic Arts'
                    src={apexLegendsLogo}
                    width={'360px'}
                    height={'260px'}
                    alt='Apex legends svg logo trademark of Electronic Arts'/>
                <a title='Data provided by https://apexlegendsapi.com/'>
                    <br/>
                    Unofficial
                    <br/>
                    Player Stats Viewer 
                </a>
            </h1>
        </Flex>
    )
}

export default Header;