import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const usePlayer = (
  player,
  platform,
  setLoading,
  setFoundStats,
  setPlayerLegendData,
  shouldFetch,
  setShouldFetch,
  parsedPlayerLegendData
) => {
  const { data, error, isLoading } = useSWR(
    shouldFetch
      ? `https://api.mozambiquehe.re/bridge?auth=${process.env.APEX_API_ACCESS}&player=${player}&platform=${platform}`
      : null,
    fetcher
  );

  console.log("fetch response from hook", data);

  useEffect(() => {
    // set loading to swr loading
    setLoading(isLoading);
    // if data
    if (data) {
      parsedPlayerLegendData.current = Object.entries(data.legends.all).filter(
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
      setPlayerLegendData(data.legends.all);
      parsedPlayerLegendData.current = Object.entries(data.legends.all).filter(
        (entry) => entry[1].data
      );
      setShouldFetch(false);
    }
  }, [data]);

  return {
    // SWR response of only needed info
    isLoading,
    isError: error,
  };
};

export default usePlayer;
