import React, { useState } from "react";
import { Grid, Flex, Box, Text, GridItem, SimpleGrid } from "@chakra-ui/react";
import menuStyles from "../styles/Menu.module.css";
import Image from "next/image";

import apexLogoWhite from "../public/apex-logo-white.png";
import Characters from "./Characters";
import SelectedCharacter from "./SelectedCharacter";

function StatsViewer({
  player,
  foundStats,
  selectedLegend,
  setSelectedLegend,
  hoveredLegend,
  setHoveredLegend,
  recentlyUsedLegend,
  playerLegendData,
}) {
  const [killsAsLegend, setKillsAsLegend] = useState([]);
  const selectingLegend = !selectedLegend[0] && !hoveredLegend[0];
  const canReselectLegend = selectedLegend[1] && !hoveredLegend[1]?.data;

  return (
    <Flex
      className={menuStyles.mainContainer}
      onClick={() => canReselectLegend && setSelectedLegend("")}
    >
      {foundStats.totalData && (
        <GridItem w={"100%"}>
          <Grid templateColumns={"50% 50%"}>
            <GridItem>
              <SimpleGrid templateRows={2} alignItems={"center"} zIndex={0}>
                <Box
                  gridRow={1}
                  m={"6em 1.5em 0em 1.5em"}
                  zIndex={"0"}
                  className={menuStyles.totalKills}
                >
                  <Text fontSize="2xl" fontWeight={"black"} color={"orange"}>
                    {`${player}`}
                  </Text>
                  <Text color={"white"} fontSize={"3xl"} fontWeight={"black"}>
                    {`Total Kills ${foundStats.totalData?.kills.value}`}
                  </Text>
                </Box>
                <SelectedCharacter
                  gridRow={2}
                  recentlyUsedLegend={recentlyUsedLegend}
                  foundStats={foundStats}
                  hoveredName={hoveredLegend[0]}
                  hoveredData={hoveredLegend[1]}
                  selectedLegend={selectedLegend}
                  setKillsAsLegend={setKillsAsLegend}
                />
                {/* </GridItem> */}
              </SimpleGrid>
            </GridItem>
            <GridItem>
              <SimpleGrid templateRows={"auto 1fr"} rowGap={2.5}>
                <Flex
                  className={menuStyles.characterNameContainer}
                  pt={"0.3em"}
                >
                  <Box
                    className={menuStyles.hoveredName}
                    border={selectingLegend && "transparent"}
                    backgroundColor={selectingLegend && "transparent"}
                  />
                  <Text className={menuStyles.hoveredNameDisplay}>
                    {selectedLegend[0] ? selectedLegend[0] : hoveredLegend[0]}
                  </Text>
                </Flex>
                <Characters
                  position={"absolute"}
                  legends={foundStats}
                  playerLegendData={playerLegendData}
                  hoveredLegend={hoveredLegend}
                  selectedLegend={selectedLegend}
                  setHoveredLegend={setHoveredLegend}
                  setSelectedLegend={setSelectedLegend}
                />
              </SimpleGrid>
            </GridItem>
          </Grid>
        </GridItem>
      )}
      {/* selectedLegend Name lowest bar Display */}
      <Box
        display={!foundStats.totalData && "none"}
        zIndex={2}
        position={"absolute"}
        overflow={"hidden"}
        backgroundImage={selectedLegend[1] && selectedLegend[1]?.ImgAssets.icon}
        backgroundSize={"22vh"}
        backgroundRepeat={"no-repeat"}
        className={menuStyles.characterDisplay}
      >
        <Text fontSize={"2.7vh"}>
          <Flex display={"flex"} flexDirection={"row"}>
            <Image
              src={apexLogoWhite}
              width={"50vw"}
              height={"50vh"}
              alt="Apex logo white"
            />
            <Text textAlign={"center"} fontSize={"1.9vh"} color={"orange"}>
              {player}
              <br />
              <Text fontSize={"2.2vh"} color={"white"} fontWeight={"bold"}>
                {selectedLegend[0]
                  ? selectedLegend[0]
                  : hoveredLegend[0]
                  ? hoveredLegend[0]
                  : "Now Selecting"}
              </Text>
            </Text>
          </Flex>
        </Text>
      </Box>
    </Flex>
  );
}

export default StatsViewer;
