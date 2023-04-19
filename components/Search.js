import React from "react";
import {
  Flex,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Button,
  Text,
  FormControl,
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
    <Flex
      className={menuStyles.inputStyles}
      experimental_spaceY={3}
      flexDirection={"column"}
    >
      <Flex flexDirection={"row"} experimental_spaceX={3} padding={8}>
        <RadioGroup
          onChange={setPlatform}
          value={platform}
          title="Platform options"
          m={"auto"}
        >
          <Stack direction="row" gap={"0.5em"}>
            <Radio value="PS4"> PSN </Radio>
            <Radio value="X1"> XBL </Radio>
            <Radio value="PC"> PC </Radio>
          </Stack>
        </RadioGroup>
        <form onSubmit={searchUser}>
          <FormControl as={"fieldset"} isRequired>
            <Input
              width="auto"
              placeholder="Player name"
              onChange={(e) => setPlayer(e.target.value)}
              title={
                !platform ? "Select a platform first" : "Enter a player name"
              }
              isDisabled={!platform}
            />
            <Button
              variant="outline"
              title={
                !platform || !player
                  ? "Select platform and enter user information"
                  : "Click search"
              }
              type="submit"
              isDisabled={!platform || !player}
            >
              find player
            </Button>
          </FormControl>
        </form>
        <br />
      </Flex>
      <Text color={"red"} fontSize={"14"} fontWeight={"bold"}>
        {error}
      </Text>
      {/* figure out error handling for display here */}
    </Flex>
  );
}

export default Search;
