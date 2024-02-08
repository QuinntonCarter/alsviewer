import React, { useState, useRef } from "react";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import usePlayer from "../hooks/usePlayer.js";
import Header from "./Header.js";
import Search from "./Search.js";
import StatsViewer from "./StatsViewer.js";
import Image from "next/image.js";
import apexLegendsLogo from "../public/apex-legends-logo.svg";

import menuStyles from "../styles/Menu.module.css";

function Layout(props) {
  const [shouldFetch, setShouldFetch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // for inputs
  // initially populated w player data for (none apex player) display UI
  const [platform, setPlatform] = useState("PS4");
  const [player, setPlayer] = useState("malcolm hex");

  const [foundStats, setFoundStats] = useState({});
  const [playerLegendData, setPlayerLegendData] = useState([]);
  const [hoveredLegend, setHoveredLegend] = useState([]);
  const [selectedLegend, setSelectedLegend] = useState([]);

  let parsedPlayerLegendData = useRef(null);

  const { isLoading, isError } = usePlayer(
    player,
    platform,
    setLoading,
    setFoundStats,
    setPlayerLegendData,
    shouldFetch,
    setShouldFetch,
    parsedPlayerLegendData
  );

  async function searchUser(e) {
    e.preventDefault();
    setShouldFetch(true);
  }

  function showError(err) {
    setError(err);
  }

  function resetData() {
    setFoundStats({});
    setPlatform("");
    setPlayer("");
    parsedPlayerLegendData.current = null;
  }

  if (isLoading || loading)
    return (
      <Container
        width={"100vw"}
        height={"100vh"}
        flex-wrap={"wrap"}
        display={"flex"}
        flexDir={"column"}
        justify-content={"center"}
        align-content={"center"}
        margin={"auto"}
      >
        <Spinner margin={"auto"} />
      </Container>
    );
  if (isError) return <div>Failed to reach API</div>;

  return (
    <Flex flexDirection={"column"} className="appContainer">
      <Box className={menuStyles.noMobile}>
        <Image
          title="Apex Legends logo and IP trademark Electronic Arts"
          src={apexLegendsLogo}
          width={"360px"}
          height={"260px"}
          alt="Apex legends svg logo trademark of Electronic Arts"
        />
        <Text fontWeight={"medium"}> ApexStats is viewable on desktop </Text>
      </Box>
      {!parsedPlayerLegendData.current && !shouldFetch ? (
        <>
          <Header />
          <Search
            platform={platform}
            setPlatform={setPlatform}
            player={player}
            error={error}
            loading={isLoading}
            setError={setError}
            setPlayer={setPlayer}
            searchUser={searchUser}
            foundStats={foundStats}
          />
        </>
      ) : (
        <StatsViewer
          player={player}
          foundStats={foundStats}
          selectedLegend={selectedLegend}
          setSelectedLegend={setSelectedLegend}
          hoveredLegend={hoveredLegend}
          setHoveredLegend={setHoveredLegend}
          recentlyUsedLegend={foundStats.recentlyUsedLegend}
          parsedPlayerLegendData={parsedPlayerLegendData}
          playerLegendData={playerLegendData}
          resetData={resetData}
        />
      )}
      {props.children}
    </Flex>
  );
}

export default Layout;
