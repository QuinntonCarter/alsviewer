import React, { useState } from "react";
import {
  Grid,
  Flex,
  Box,
  Text,
  GridItem,
  SimpleGrid,
  useBoolean,
} from "@chakra-ui/react";
import Image from "next/image";
import menuStyles from "../styles/Menu.module.css";
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
  resetData,
}) {
  const [killsAsLegend, setKillsAsLegend] = useState([]);
  const selectingLegend = !selectedLegend[0] && !hoveredLegend[0];
  const canReselectLegend = selectedLegend[1] && !hoveredLegend[1]?.data;
  const [hoverToggle, setHoverToggle] = useBoolean(false);
  let playerOrDefault = player ? player : "malcolm hex";
  return (
    <Flex
      className={menuStyles.mainContainer}
      onClick={() => canReselectLegend && setSelectedLegend("")}
    >
      <GridItem w={"100%"}>
        <Grid templateColumns={"repeat(2, 50%)"}>
          {foundStats.totalData && (
            <>
              <GridItem>
                <SimpleGrid templateRows={2} alignItems={"center"} zIndex={0}>
                  <Box
                    gridRow={1}
                    m={"6em 1.5em 0em 1.5em"}
                    zIndex={"0"}
                    className={menuStyles.totalKills}
                  >
                    <Text
                      className={`${menuStyles.playerNameReset} ${menuStyles.resetSelectable}`}
                      fontSize="2xl"
                      fontWeight={"black"}
                      color={"orange"}
                      position={"absolute"}
                      zIndex={4}
                      title="Click here to start a new search"
                      onMouseEnter={setHoverToggle.toggle}
                      onMouseLeave={setHoverToggle.toggle}
                      onClick={resetData}
                      _hover={{
                        color: "white",
                        animation: "none",
                      }}
                    >
                      {hoverToggle ? `${playerOrDefault}` : `Click to reset`}
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"3xl"}
                      fontWeight={"extrabold"}
                    >
                      {`Total Kills`}{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "black",
                          fontSize: "55px",
                        }}
                      >
                        {foundStats.totalData?.kills?.value || "No data"}
                      </span>
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
                </SimpleGrid>
              </GridItem>
              <GridItem>
                <SimpleGrid templateRows={"auto 1fr"}>
                  <Flex
                    className={menuStyles.characterNameContainer}
                    flexDirection={"column"}
                    pt={"1.7vh"}
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
            </>
          )}
        </Grid>
      </GridItem>
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
        <Box name="border">
          <Flex
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box width={"50px"}>
              <Image
                src={apexLogoWhite}
                alt="Apex logo white"
                height={"fit-content"}
                maxWidth={"100%"}
              />
            </Box>
            <Text
              as="span"
              textAlign={"center"}
              fontSize={"1.9vh"}
              color={"orange"}
            >
              {playerOrDefault}
              <br />
              <Text
                as="span"
                fontSize={"2.2vh"}
                color={"white"}
                fontWeight={"bold"}
              >
                {selectedLegend[0]
                  ? selectedLegend[0]
                  : hoveredLegend[0]
                  ? hoveredLegend[0]
                  : "Now Selecting"}
              </Text>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default StatsViewer;
