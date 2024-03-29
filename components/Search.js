import React from "react";
import {
  Input,
  RadioGroup,
  Radio,
  Button,
  Text,
  FormControl,
  FormHelperText,
  HStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import menuStyles from "../styles/Menu.module.css";

function Search({
  platform,
  player,
  setPlatform,
  setPlayer,
  searchUser,
  error,
  setError,
  loading,
}) {
  function clearError() {
    if (error) {
      setError(null);
    }
    return;
  }

  return (
    <Container className={menuStyles.inputStyles} experimental_spaceX={3}>
      <form onSubmit={searchUser} onClick={clearError} role="search">
        <FormControl
          as={"fieldset"}
          className={menuStyles.searchForm}
          isrequired
        >
          <RadioGroup
            onChange={setPlatform}
            value={platform}
            title="Platform options"
          >
            <FormHelperText m={"1"}> Select a Platform </FormHelperText>
            <HStack direction="row" gap={"0.5em"} isrequired>
              <Radio value="PS4" aria-label="PS4">
                PSN
              </Radio>
              <Radio value="X1" aria-label="X1">
                XBL
              </Radio>
              <Radio value="PC" aria-label="PC (EA account)">
                PC (EA account)
              </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText m={"1"}> Player Name </FormHelperText>
          <Flex flexDirection={"row"} gap={"0.5em"}>
            <Input
              width="60%"
              placeholder="Player name"
              onChange={(e) => setPlayer(e.target.value)}
              title={
                !platform ? "Select a platform first" : "Enter a player name"
              }
              isrequired
            />
            <Button
              variant="outline"
              title={
                !platform || !player
                  ? "Select platform and enter user information"
                  : "Click search"
              }
              type="submit"
              isinvalid={!platform || !player}
              isDisabled={error}
              isLoading={loading}
            >
              {!error ? "Search Player" : "Error"}
            </Button>
          </Flex>
          <Text color={"red"} fontSize={"14"} fontWeight={"bold"}>
            {error}
          </Text>
        </FormControl>
      </form>
    </Container>
  );
}

export default Search;
