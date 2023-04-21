import React, { useEffect } from "react";
import { GridItem, Text, Box, SimpleGrid } from "@chakra-ui/react";
import menuStyles from "../styles/Menu.module.css";

function SelectedCharacter({
  hoveredName,
  hoveredData,
  recentlyUsedLegend,
  selectedLegend,
}) {
  console.log(
    "selected legend from selected legend component",
    selectedLegend[1] && selectedLegend[1].data
  );
  const mappedData =
    selectedLegend[1] &&
    selectedLegend[1].data.map((data) => (
      <Box
        zIndex={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        key={selectedLegend[1]?.imgAssets?.icon}
      >
        <Text
          backgroundColor={"transparent"}
          fontWeight={"bold"}
          lineHeight={"4vh"}
          textAlign={"center"}
          color={"white"}
          border={".23vw solid rgba(245, 167, 5, 0.8)"}
          w={"100%"}
          m={".32vw"}
        >
          {data.name === "Kills" ? `Kills as ${selectedLegend[0]}` : data.name}{" "}
          : <span style={{ fontSize: "2vw" }}> {data.value} </span>
        </Text>
      </Box>
    ));
  // use to calculate kills of selected legend on select
  useEffect(() => {
    selectedLegend[1] &&
      console.log(
        "selected character data",
        selectedLegend[1].data.map((val) => val.name)
      );
  }, [selectedLegend]);

  return (
    <GridItem
      fontFamily={"Apex Sub"}
      className={menuStyles.characterDisplayImage}
      opacity={`${selectedLegend[1]}` ? "100%" : "0%"}
      alignItems={"center"}
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
        m={"auto"}
        templateColumns={"repeat(2, auto)"}
        columnGap={"1em"}
        p={"0.7em"}
        position={"absolute"}
        maxWidth={"40%"}
        fontSize={"1.5vw"}
      >
        {mappedData && mappedData}
      </SimpleGrid>
    </GridItem>
  );
}

export default SelectedCharacter;
