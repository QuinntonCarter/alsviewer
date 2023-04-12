import { Box, Image, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import menuStyles from '../styles/Menu.module.css';

const ClickableCharacter = ({name, legend, data, icon, selectedLegend, setHoveredLegend, setSelectedLegend}) => {
    // set css styling based on data present; import from module.css
    const selectable = data ? (selectedLegend[0] === name ? menuStyles.selected : menuStyles.selectable ) : menuStyles.notSelectable

    return (
        <>
        { data ?
            <Flex
                onMouseEnter={() => setHoveredLegend(legend)}
                onMouseLeave={() => setHoveredLegend('')}
                onClick={() => setSelectedLegend(legend)}
                className={`${selectable} `}
                display={'flex'}
                title={`click to select ${name}`}
                flexDirection={'column'}
                borderWidth='2.7px'
                align={'center'}>
                    <Box bgColor={'transparent'}>
                        <Image
                            src={icon}
                            position={'relative'}
                            alt={`${name} selectable icon in menu`}
                            style={{ transform: 'skewX(18deg)' }}
                            w={'6vw'}
                            h={'12vh'}
                            // boxSize='90'
                        />
                    </Box>
                <Text bgColor={(selectedLegend[0] === name ? 'orange' : 'gray')}>
                    <p className={menuStyles.selectableName}> {name} </p>
                </Text>
            </Flex>
        :
            <Flex
                className={`${selectable}`}
                display={'flex'}
                title={`No player data provided by API for ${name}`}
                flexDirection={'column'}
                borderWidth='2.7px'
                align={'center'}>
                    <Image
                        src={icon}
                        position={'relative'}
                        alt={`${name} none selectable icon in menu`}
                        style={{ filter: 'grayscale(100%)', transform: 'skewX(18deg)' }}
                        w={'6vw'}
                        h={'12vh'}
                        // boxSize='90'
                    />
                    <Text>
                        <p className={menuStyles.selectableName} color='rgb(161, 161, 161)'> {name} </p>
                    </Text>
            </Flex>
        }
    </>
    )
}

export default ClickableCharacter;