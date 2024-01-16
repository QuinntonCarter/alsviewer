import React, { useState, useRef, useEffect } from "react";
import { Container, Flex, Spinner } from "@chakra-ui/react";
// import useSWR from "swr";
import usePlayer from "../hooks/usePlayer.js";
import Header from "./Header.js";
import Search from "./Search.js";
import StatsViewer from "./StatsViewer.js";

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

  if (loading)
    return (
      <Container>
        <Flex direction={"column"}>
          <Spinner />
          <br />
          Loading...
        </Flex>
      </Container>
    );
  if (isError) return <div>Failed to reach API</div>;

  return (
    <Flex flexDirection={"column"} className="appContainer">
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
