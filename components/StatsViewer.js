import React, { useState, useEffect } from "react";
import {
  Grid,
  Flex,
  Box,
  Text,
  GridItem,
  SimpleGrid,
  useBoolean,
} from "@chakra-ui/react";
import menuStyles from "../styles/Menu.module.css";
import apexLogoWhite from "../public/apex-logo-white.png";
import Image from "next/image";
import apexLegendsLogo from "../public/apex-legends-logo.svg";

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
    <>
      <Box className={menuStyles.noMobile}>
        <Image
          title="Apex Legends logo and IP trademark Electronic Arts"
          src={apexLegendsLogo}
          width={"360px"}
          height={"260px"}
          alt="Apex legends svg logo trademark of Electronic Arts"
        />
        <p> Unavailable on mobile </p>
      </Box>
      <Flex
        className={menuStyles.mainContainer}
        onClick={() => canReselectLegend && setSelectedLegend("")}
      >
        {foundStats.totalData && (
          <GridItem w={"100%"}>
            <Grid templateColumns={"repeat(2, 50%)"}>
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
                        {foundStats.totalData?.kills.value}
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
            </Grid>
          </GridItem>
        )}
        {/* selectedLegend Name lowest bar Display */}
        <Box
          display={!foundStats.totalData && "none"}
          zIndex={2}
          position={"absolute"}
          overflow={"hidden"}
          backgroundImage={
            selectedLegend[1] && selectedLegend[1]?.ImgAssets.icon
          }
          backgroundSize={"22vh"}
          backgroundRepeat={"no-repeat"}
          className={menuStyles.characterDisplay}
        >
          <Box name="border">
            <Flex display={"flex"} flexDirection={"row"}>
              <Image
                src={apexLogoWhite}
                width={"50vw"}
                height={"50vh"}
                alt="Apex logo white"
              />
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
    </>
  );
}

export default StatsViewer;
