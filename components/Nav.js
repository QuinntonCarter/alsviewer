import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <Flex direction='row'>
            <ul>
                <li>
                    <Link href='/stats'> stats </Link>
                </li>
                <li>
                    <Link href='/about'> about </Link>
                </li>
            </ul>
        </Flex>
    )
}

export default Nav