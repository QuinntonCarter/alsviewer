import React, { useState } from "react";
import { Grid, Flex, Box, Text } from "@chakra-ui/react";
import menuStyles from "../styles/Menu.module.css";
import Image from "next/image";

import apexLogoWhite from "../public/apex-logo-white.png";
import Characters from "./Characters";
import SelectedCharacter from "./SelectedCharacter";

const StatsViewer = ({
  player,
  foundStats,
  selectedLegend,
  setSelectedLegend,
  hoveredLegend,
  setHoveredLegend,
  recentlyUsedLegend,
  parsedLegendData,
  playerLegendData,
}) => {
  const [killsAsLegend, setKillsAsLegend] = useState([]);

  // let viewableName = !hoveredLegend[0] ? selectedLegend[0] : hoveredLegend[0]

  return (
    <Box
      className={menuStyles.mainContainer}
      onClick={() => selectedLegend[1] && setSelectedLegend("")}
    >
      {foundStats.totalData && (
        <>
          <Box>
            <Flex
              zIndex={1}
              flexDirection={"column"}
              alignItems={"center"}
              height={"auto"}
              width={"100%"}
            >
              <p className={menuStyles.totalKills}>
                {" "}
                {`${player} Total Kills ${foundStats.totalData?.kills.value}`}{" "}
              </p>
              <Flex flexDirection={"row"}>
                <Grid templateColumns={"repeat(2, 1fr)"}>
                  <SelectedCharacter
                    // position={'relative'}
                    recentlyUsedLegend={recentlyUsedLegend}
                    foundStats={foundStats}
                    hoveredName={hoveredLegend[0]}
                    hoveredData={hoveredLegend[1]}
                    selectedLegend={selectedLegend}
                    setKillsAsLegend={setKillsAsLegend}
                  />
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
                </Grid>
                {/* display of hovered characters and selected */}
              </Flex>
            </Flex>
          </Box>
        </>
      )}
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
          {selectedLegend[0] ? (
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
          ) : (
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
                <Text fontSize={"2.2vh"}> Now Selecting </Text>
              </Text>
            </Flex>
          )}
        </Text>
      </Box>
    </Box>
  );
};

export default StatsViewer;
