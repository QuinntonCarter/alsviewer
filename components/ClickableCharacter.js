import { Box, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import menuStyles from "../styles/Menu.module.css";

function ClickableCharacter({
  name,
  legend,
  data,
  icon,
  selectedLegend,
  setHoveredLegend,
  setSelectedLegend,
}) {
  const selectable = data
    ? selectedLegend[0] === name
      ? menuStyles.selected
      : menuStyles.selectable
    : menuStyles.notSelectable;

  function selectLegend() {
    if (selectedLegend) {
      console.log(
        "selected legend",
        legend,
        "prev legend data",
        selectedLegend
      );
      setSelectedLegend(legend);
    }
    setSelectedLegend(legend);
  }

  return data ? (
    <Flex
      onMouseEnter={() => setHoveredLegend(legend)}
      onMouseLeave={() => setHoveredLegend("")}
      onClick={selectLegend}
      className={selectable}
      title={`click to select ${name}`}
      flexDirection={"column"}
      borderWidth="2.7px"
      align={"center"}
    >
      <Box bgColor={"transparent"}>
        <Image
          src={icon}
          position={"relative"}
          alt={`${name} selectable icon in menu`}
          style={{ transform: "skewX(18deg)" }}
          h={"77px"}
        />
      </Box>
      <Text fontWeight={"normal"}>
        {/* edit styles so class only on Text component */}
        <p className={menuStyles.selectableName}> {name} </p>
      </Text>
    </Flex>
  ) : (
    <Flex
      className={selectable}
      display={"flex"}
      title={`No player data provided by API for ${name}`}
      flexDirection={"column"}
      borderWidth="2.7px"
      align={"center"}
    >
      <Image
        src={icon}
        position={"relative"}
        alt={`${name} none selectable icon in menu`}
        style={{ filter: "grayscale(100%)", transform: "skewX(18deg)" }}
        h={"77px"}
      />
      <Text fontWeight={"normal"}>
        {/* edit styles so class only on Text component */}
        <p className={menuStyles.selectableName}> {name} </p>
      </Text>
    </Flex>
  );
}

export default ClickableCharacter;
