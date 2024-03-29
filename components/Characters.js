import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import ClickableCharacter from "./ClickableCharacter";
import menuStyles from "../styles/Menu.module.css";

function Characters({
  playerLegendData, // this is the unparsed version in v1 of app, need to pass
  selectedLegend,
  setHoveredLegend,
  setSelectedLegend,
}) {
  // **
  // filters out "global" entry and returns player data to be viewed in selection chart
  const mappedCharacters = Object.entries(playerLegendData)
    .filter((entry) => entry[0] !== "Global")
    .map((entry) =>
      entry.keys() !== "Global" && entry[1].data ? (
        <ClickableCharacter
          selectedLegend={selectedLegend}
          setHoveredLegend={setHoveredLegend}
          setSelectedLegend={setSelectedLegend}
          name={entry[0]}
          data={entry[1].data}
          icon={entry[1].ImgAssets.icon}
          legend={entry}
          key={entry[1].ImgAssets.icon}
        />
      ) : (
        entry.keys() !== "Global" && (
          <ClickableCharacter
            selectedLegend={selectedLegend}
            name={entry[0]}
            icon={entry[1].ImgAssets.icon.split(" ").join("%20")} // error: Cannot read properties of undefined (reading 'icon')
            key={entry[1].ImgAssets.icon}
          />
        )
      )
    );

  return (
    <Flex flexDirection={"column"}>
      <SimpleGrid
        className={menuStyles.characterContainer}
        columns={5}
        gridRowGap={1}
        gridColumnGap={1}
        top={"70px"}
      >
        {mappedCharacters}
      </SimpleGrid>
    </Flex>
  );
}

export default Characters;
