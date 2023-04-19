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
}) {
  return (
    <Container className={menuStyles.inputStyles} experimental_spaceX={3}>
      <form onSubmit={searchUser} role="search">
        <FormControl
          as={"fieldset"}
          className={menuStyles.searchForm}
          isRequired
        >
          <RadioGroup
            onChange={setPlatform}
            value={platform}
            title="Platform options"
          >
            <FormHelperText m={"1"}> Select a Platform </FormHelperText>
            <HStack direction="row" gap={"0.5em"} isRequired>
              <Radio value="PS4" aria-label="PS4">
                {" "}
                PSN{" "}
              </Radio>
              <Radio value="X1" aria-label="X1">
                {" "}
                XBL{" "}
              </Radio>
              <Radio value="PC" aria-label="PC">
                {" "}
                PC{" "}
              </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText m={"1"}> Player Name </FormHelperText>
          <Input
            width="auto"
            placeholder="Player name"
            onChange={(e) => setPlayer(e.target.value)}
            title={
              !platform ? "Select a platform first" : "Enter a player name"
            }
            isRequired
          />
          <Button
            variant="outline"
            title={
              !platform || !player
                ? "Select platform and enter user information"
                : "Click search"
            }
            type="submit"
            isInvalid={!platform || !player}
          >
            find player
          </Button>
          <Text color={"red"} fontSize={"14"} fontWeight={"bold"}>
            {error}
          </Text>
        </FormControl>
      </form>
    </Container>
  );
}

export default Search;
