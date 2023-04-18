import React from "react";
import menuStyles from "../styles/Menu.module.css";
import { Text, Flex, SimpleGrid, Box } from "@chakra-ui/react";
import ClickableCharacter from "./ClickableCharacter";

function Characters({
  playerLegendData,
  selectedLegend,
  setHoveredLegend,
  setSelectedLegend,
}) {
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
        />
      ) : (
        entry.keys() !== "Global" && (
          <ClickableCharacter
            selectedLegend={selectedLegend}
            name={entry[0]}
            icon={entry[1].ImgAssets.icon.split(" ").join("%20")}
          />
        )
      )
    );

  return (
    <Flex flexDirection={"column"}>
      {/* ** */}
      {/* {!selectedLegend[0] ? (
        hoveredLegend[0] && (
          <>
            <Box
              className={menuStyles.hoveredName}
              border={"transparent"}
              backgroundColor={"transparent"}
            />
            <Text className={menuStyles.hoveredNameDisplay}>
              {hoveredLegend[0]}
            </Text>
          </>
        )
      ) : (
        <>
          <Box className={menuStyles.hoveredName} />
          <Text className={menuStyles.hoveredNameDisplay}>
            {selectedLegend[0]}
          </Text>
        </>
      )} */}
      {/* ** */}
      <SimpleGrid
        className={menuStyles.characterContainer}
        columns={5}
        gridRowGap={1}
        gridColumnGap={1}
        // **
        // position={'absolute'}
        top={"62vh"}
      >
        {mappedCharacters}
      </SimpleGrid>
    </Flex>
  );
}

export default Characters;
