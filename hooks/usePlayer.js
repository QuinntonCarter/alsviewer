import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const usePlayer = (player, platform) => {
  const { data, error, isLoading } = useSWR(
    `https://api.mozambiquehe.re/bridge?auth=${process.env.APEX_API_ACCESS}&player=${player}&platform=${platform}`,
    fetcher
  );

  if (isLoading) return <p> Loading... </p>;
  if (error) return <p> error retrieving data </p>;
  return {
    // swr response of only needed data
    data: {
      playerName: data.global.name,
      playerLvl: data.global.level,
      totalData: data.total,
      banStatus: [data.global.bans],
      currentArenaRank: [data.global.arena],
      currentBrRank: [data.global.rank],
      recentlyUsedLegend: data.legends.selected,
      playerLegendData: data.legends.all,
    },
    // swr
    isLoading,
    isError: error,
  };
};

export default usePlayer;
