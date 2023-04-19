import React, { useEffect } from "react";
import { GridItem, Text, Box, SimpleGrid } from "@chakra-ui/react";
import menuStyles from "../styles/Menu.module.css";

function SelectedCharacter({
  hoveredName,
  hoveredData,
  recentlyUsedLegend,
  selectedLegend,
}) {
  // ** find way to map object values and if key contains 'kills' add value for more accurate total kills **
  const totalKills = (kills, kills2, kills3) => {
    let total;
  };

  const mappedData =
    selectedLegend[1] &&
    selectedLegend[1].data.map((data) => (
      <Box
        zIndex={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        key={data.name + data.value}
      >
        <Text
          backgroundColor={"transparent"}
          fontWeight={"bold"}
          lineHeight={"4vh"}
          textAlign={"center"}
          color={"white"}
          fontSize={"sm"}
        >
          {data.name === "Kills" ? `Kills as ${selectedLegend[0]}` : data.name}{" "}
          : {data.value}
        </Text>
      </Box>
    ));
  // use to calculate kills of selected legend on select
  // useEffect(() => {
  //     // selectedLegend[1] && selectedLegend[1].data.filter(val =>
  //     //     val.name)
  // },[selectedLegend])

  return (
    <GridItem
      fontFamily={"Apex Sub"}
      className={menuStyles.characterDisplayImage}
      opacity={`${selectedLegend[1]}` ? "100%" : "0%"}
      height={"96vh"}
      width={"44vw"}
      bgImage={
        selectedLegend[1]
          ? `url(${selectedLegend[1].ImgAssets.icon})`
          : hoveredData && hoveredData.ImgAssets.icon
      }
      bgRepeat={"no-repeat"}
    >
      <SimpleGrid
        backdropFilter={"blur(2.5px)"}
        borderRadius={"4px"}
        width={"65%"}
        m={"auto"}
        templateColumns={"repeat(2, 1fr)"}
        columnGap={"1em"}
        p={"0.7em"}
      >
        {mappedData && mappedData}
      </SimpleGrid>
    </GridItem>
  );
}

export default SelectedCharacter;
