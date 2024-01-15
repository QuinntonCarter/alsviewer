import React, { useState, useEffect } from "react";
import { Box, Image, Flex, Text, IconButton } from "@chakra-ui/react";
// import { QuestionOutlineIcon } from "@chakra-ui/icons";
import menuStyles from "../styles/Menu.module.css";
import axios from "axios";

function ClickableCharacter({
  name,
  legend,
  data,
  icon,
  selectedLegend,
  setHoveredLegend,
  setSelectedLegend,
}) {
  const [missingImg, setMissingImg] = useState(false);
  const selectable = data
    ? selectedLegend[0] === name
      ? menuStyles.selected
      : menuStyles.selectable
    : menuStyles.notSelectable;

  function selectLegend() {
    if (selectedLegend) {
      setSelectedLegend(legend);
    }
    setSelectedLegend(legend);
  }
  // lost image issue **
  // useEffect(() => {
  //   (async function checkMemeAvailaibility() {
  //     //   // if(i === )
  //     //   // setIsLoading(true);
  //     axios
  //       .get(icon)
  //       // if get response, leave missing state as false
  //       .then((response) => {
  //         console.log("success", response.status);
  //         setMissingImg((prevState) => prevState);
  //       })
  //       // if error response, setMissing(true)
  //       .catch((error) => {
  //         console.log("error", error);
  //         // maybe setup so small error modal returns # of missing memes
  //         setMissingImg(true);
  //         // setErrors(error);
  //       });
  //   })();
  // }, []);

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
        {/* {missingImg ? (
          <Text as="p"> No Image</Text>
        ) : ( */}
        <Image
          src={icon}
          position={"relative"}
          alt={`${name} selectable icon in menu`}
          style={{ transform: "skewX(18deg)" }}
          h={"75px"}
        />
        {/* // )} */}
      </Box>
      <Text fontWeight={"normal"}>
        {/* edit styles so class only on Text component */}
        <span className={menuStyles.selectableName}> {name} </span>
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
        h={"75px"}
      />
      <Text fontWeight={"normal"}>
        {/* edit styles so class only on Text component */}
        <Text className={menuStyles.selectableName} as="span">
          {" "}
          {name}{" "}
        </Text>
      </Text>
    </Flex>
  );
}

export default ClickableCharacter;
