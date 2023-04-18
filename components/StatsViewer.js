import React, { useState } from "react";
import { Grid, Flex, Box, Text, GridItem } from "@chakra-ui/react";
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
  parsedLegendData,
  playerLegendData,
}) {
  const [killsAsLegend, setKillsAsLegend] = useState([]);
  const selectingLegend = !selectedLegend && !hoveredLegend[0];

  // let viewableName = !hoveredLegend[0] ? selectedLegend[0] : hoveredLegend[0]

  return (
    <Flex
      className={menuStyles.mainContainer}
      onClick={() => selectedLegend[1] && setSelectedLegend("")}
    >
      {foundStats.totalData && (
        <GridItem>
          {/* ** */}
          {/* <Flex
            zIndex={1}
            flexDirection={"column"}
            alignItems={"center"}
            height={"auto"}
            width={"100%"}
          > */}
          {/* <Text
              fontSize="3xl"
              className={menuStyles.totalKills}
            >{`${player} Total Kills ${foundStats.totalData?.kills.value}`}</Text> */}
          {/* <Flex flexDirection={"row"}> */}
          {/* ** */}
          <Grid templateColumns={"repeat(2, 1fr)"}>
            <GridItem>
              <Flex flexDir={"column"} alignItems={"center"}>
                <Text
                  fontSize="3xl"
                  className={menuStyles.totalKills}
                >{`${player} Total Kills ${foundStats.totalData?.kills.value}`}</Text>
                <SelectedCharacter
                  // position={'relative'}
                  recentlyUsedLegend={recentlyUsedLegend}
                  foundStats={foundStats}
                  hoveredName={hoveredLegend[0]}
                  hoveredData={hoveredLegend[1]}
                  selectedLegend={selectedLegend}
                  setKillsAsLegend={setKillsAsLegend}
                />
              </Flex>
            </GridItem>
            <GridItem>
              {/* {!selectedLegend[0] ? (
                hoveredLegend[0] && ( */}
              <Flex className={menuStyles.characterNameContainer}>
                <Box
                  className={menuStyles.hoveredName}
                  border={selectingLegend && "transparent"}
                  backgroundColor={selectingLegend && "transparent"}
                />
                <Text className={menuStyles.hoveredNameDisplay}>
                  {selectedLegend[0] ? selectedLegend[0] : hoveredLegend[0]}
                </Text>
              </Flex>
              {/* //   )
              // ) : (
              //   <Flex className={menuStyles.characterNameContainer}>
              //     <Box className={menuStyles.hoveredName} />
              //     <Text className={menuStyles.hoveredNameDisplay}>
              //       {selectedLegend[0]}
              //     </Text>
              //   </Flex>
              // )} */}
              <Characters
                position={"absolute"}
                legends={foundStats}
                // parsedLegendData={parsedLegendData}
                playerLegendData={playerLegendData}
                hoveredLegend={hoveredLegend}
                selectedLegend={selectedLegend}
                setHoveredLegend={setHoveredLegend}
                setSelectedLegend={setSelectedLegend}
              />
            </GridItem>
          </Grid>
          {/* ** */}
          {/* display of hovered characters and selected */}
          {/* </Flex> */}
          {/* </Flex> */}
          {/* ** */}
        </GridItem>
      )}
      {/* selectedLegend Name lowest bar Display */}
      <Box
        display={!foundStats.totalData && "none"}
        position={"absolute"}
        overflow={"hidden"}
        backgroundImage={selectedLegend[1] && selectedLegend[1]?.ImgAssets.icon}
        backgroundSize={"22vh"}
        backgroundRepeat={"no-repeat"}
        className={menuStyles.characterDisplay}
      >
        <Text fontSize={"2.7vh"}>
          {/* {selectedLegend[0] ? (
            <Flex display={"flex"} flexDirection={"row"}>
              <Image
                src={apexLogoWhite}
                width={"60px"}
                height={"50px"}
                alt="Apex logo white"
              />
              <Flex textAlign={"center"} flexDirection={"column"}>
                <Text margin={0} fontSize={"1.9vh"}>
                  {" "}
                  {player}{" "}
                </Text>
                <Text margin={0} fontSize={"2.2vh"}>
                  {" "}
                  {selectedLegend[0]}{" "}
                </Text>
              </Flex>
            </Flex>
          ) : ( */}
          <Flex display={"flex"} flexDirection={"row"}>
            <Image
              src={apexLogoWhite}
              width={"50vw"}
              height={"50vh"}
              alt="Apex logo white"
            />
            <Text textAlign={"center"} fontSize={"1.9vh"}>
              {player}
              <br />
              <Text fontSize={"2.2vh"}>
                {selectedLegend[0]
                  ? selectedLegend[0]
                  : hoveredLegend[0]
                  ? hoveredLegend[0]
                  : "Now Selecting"}
              </Text>
            </Text>
          </Flex>
          {/* )} */}
        </Text>
      </Box>
    </Flex>
  );
}

export default StatsViewer;
