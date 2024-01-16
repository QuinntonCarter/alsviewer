import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const usePlayer = (player, platform) => {
  const [foundStats, setFoundStats] = useState({});
  const [playerLegendData, setPlayerLegendData] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.mozambiquehe.re/bridge?auth=${process.env.APEX_API_ACCESS}&player=${player}&platform=${platform}`,
    fetcher
  );

  useEffect(() => {
    // if data
    if (data) {
      let parsedPlayerLegendData = Object.entries(data.legends.all).filter(
        (entry) => entry[1].data
      );
      // set response data to state on successful fetch
      setFoundStats({
        playerName: data.global.name,
        playerLvl: data.global.level,
        totalData: data.total,
        banStatus: [data.global.bans],
        currentArenaRank: [data.global.arena],
        currentBrRank: [data.global.rank],
        recentlyUsedLegend: data.legends.selected,
      });
      setPlayerLegendData(parsedPlayerLegendData);
      console.log("got data?", data, "parsed", parsedPlayerLegendData);
    }
  }, [data]);

  if (isLoading) return <p> Loading... </p>;
  if (error)
    return (
      <p>
        error retrieving data
        {console.log("error retrieving player data", error)}
      </p>
    );
  return {
    // SWR response of only needed data
    foundStats,
    playerLegendData,
    // SWR
    isLoading,
    isError: error,
  };
};

export default usePlayer;
