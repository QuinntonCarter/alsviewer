import React, { useState, useEffect } from "react";
// import axios from "axios";
// import useSWR from "swr";
import { Container, Flex, Spinner } from "@chakra-ui/react";
import usePlayer from "../hooks/usePlayer.js";
import Header from "./Header.js";
import Search from "./Search.js";
import StatsViewer from "./StatsViewer.js";

// const apexAPI = axios.create({
//   baseURL: process.env.APEX_API_URL,
//   // auth: process.env.APEX_API_ACCESS,
// });

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Layout(props) {
  // const { data, isLoading, error } = useSWR(
  //   `https://api.mozambiquehe.re/bridge?auth=fKMNUxSguBohxghVtEds&player=malcolm hex&platform=PS4`,
  //   fetcher
  // );
  const [platform, setPlatform] = useState("PS4");
  const [player, setPlayer] = useState("malcolm hex");
  const { data, isLoading, isError } = usePlayer(player, platform);
  console.log("initial player data", data);

  const [hoveredLegend, setHoveredLegend] = useState([]);
  const [selectedLegend, setSelectedLegend] = useState([]);

  const [foundStats, setFoundStats] = useState({});
  // const [error, setError] = useState(null);
  const [playerLegendData, setPlayerLegendData] = useState([]);

  // const [loading, setLoading] = useState(false); ** don't need?

  // async function searchUser(e, player, platform) {
  //   e.preventDefault();
  //   setLoading(true);
  //   axios
  //     .get("https://api.mozambiquehe.re/bridge", {
  //       params: {
  //         auth: process.env.APEX_API_ACCESS,
  //         player: player,
  //         platform: platform,
  //         // merge: true,
  //       },
  //     })
  // if (!res) {
  //   setLoading(false);
  //   setError("Error retrieving player data");
  // }
  // setFoundStats({
  //   // ** assign this all to variables to be passed down to statsviewer **
  //   playerName: res.data.global.name,
  //   playerLvl: res.data.global.level,
  //   totalData: res.data.total,
  //   banStatus: [res.data.global.bans],
  //   currentArenaRank: [res.data.global.arena],
  //   currentBrRank: [res.data.global.rank],
  //   recentlyUsedLegend: res.data.legends.selected,
  // }),
  //   setPlayerLegendData(res.data.legends.all);
  // setLoading(false);

  //     .then((res) => {
  //       if (res.data.Error) {
  //         setLoading(false);
  //         showError(res.data.Error);
  //       } else {
  //         setLoading(false);
  //         setFoundStats({
  //           // ** assign this all to variables to be passed down to statsviewer **
  //           playerName: res.data.global.name,
  //           playerLvl: res.data.global.level,
  //           totalData: res.data.total,
  //           banStatus: [res.data.global.bans],
  //           currentArenaRank: [res.data.global.arena],
  //           currentBrRank: [res.data.global.rank],
  //           recentlyUsedLegend: res.data.legends.selected,
  //         }),
  //           setPlayerLegendData(res.data.legends.all);
  //       }
  //     })
  //     .catch((err) => showError(err.response.data.Error));
  // }

  function showError(err) {
    setError(err);
  }

  function resetData() {
    return setFoundStats({});
  }

  // const parsedPlayerLegendData = Object.entries(playerLegendData).filter(
  //   (entry) => entry[1].data
  // );

  // useEffect(() => {
  //   setLoading(true);
  // axios
  //   .get("https://api.mozambiquehe.re/bridge", {
  //     params: {
  //       auth: process.env.APEX_API_ACCESS,
  //       player: "malcolm hex",
  //       platform: "PS4",
  //       // merge: true,
  //     },
  //   })
  //   .then((res) => {
  //     if (res.data.Error) {
  //       setLoading(false);
  //       showError(res.data.Error);
  //     } else {
  //       setLoading(false);
  //       setFoundStats({
  //         // ** assign this all to variables to be passed down to statsviewer **
  //         playerName: res.data.global.name,
  //         playerLvl: res.data.global.level,
  //         totalData: res.data.total,
  //         banStatus: [res.data.global.bans],
  //         currentArenaRank: [res.data.global.arena],
  //         currentBrRank: [res.data.global.rank],
  //         recentlyUsedLegend: res.data.legends.selected,
  //       }),
  //         setPlayerLegendData(res.data.legends.all);
  //     }
  //   })
  //   .catch((err) => showError(err.response.data.Error));
  // }, []);

  if (isLoading || !data)
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
      {/* {!foundStats.playerName ? ( */}
      {/* <> */}
      <Header />
      <p> success placeholder: api data in console </p>
      {/* <Search
            platform={platform}
            setPlatform={setPlatform}
            player={player}
            error={error}
            loading={loading}
            setError={setError}
            setPlayer={setPlayer}
            searchUser={searchUser}
            foundStats={foundStats}
          /> */}
      {/* </> */}
      {/* ) : ( */}
      {/* // <> placeholder test </> */}
      {/* // <StatsViewer */}
      {/* //   player={player}
        //   foundStats={foundStats}
        //   selectedLegend={selectedLegend}
        //   setSelectedLegend={setSelectedLegend}
        //   hoveredLegend={hoveredLegend}
        //   setHoveredLegend={setHoveredLegend}
        //   recentlyUsedLegend={foundStats.recentlyUsedLegend}
        //   parsedLegendData={parsedPlayerLegendData}
        //   playerLegendData={playerLegendData}
        //   resetData={resetData}
        // />
      // )} */}
      {props.children}
    </Flex>
  );
}

export default Layout;
