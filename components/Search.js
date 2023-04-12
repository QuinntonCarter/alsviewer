import React from 'react';
import { Flex, Input, RadioGroup, Radio, Stack, Button, Text } from '@chakra-ui/react';
import menuStyles from '../styles/Menu.module.css';

const Search = ({platform, player, setPlatform, setPlayer, searchUser, error}) => {

    return (
            <Flex className={menuStyles.inputStyles} experimental_spaceY={3} flexDirection={'column'}>
                <Flex flexDirection={'row'} experimental_spaceX={3} padding={8}>
                    <RadioGroup onChange={setPlatform} value={platform} title='Platform options'>
                        <Stack direction='row'>
                            <Radio value='PS4'> PSN </Radio>
                            <Radio value='X1'> XBL </Radio>
                            <Radio value='PC'> PC </Radio>
                        </Stack>
                    </RadioGroup>
                    <Input width='auto' placeholder='player name' onChange={e => setPlayer(e.target.value)} title={!platform ? 'Select a platform first' : 'Enter a player name'} isDisabled={!platform && true}/>
                    <Button variant='outline' title={!platform || !player ? 'Select platform and enter user information' : 'Click search'} isDisabled={!platform || !player && true} onClick={searchUser}> find player </Button>
                    <br/>
                </Flex>
                <Text color={'red'} fontSize={'3vh'}> {error} </Text>
                {/* figure out error handling for display here */}
            </Flex>
    )
}

export default Search;