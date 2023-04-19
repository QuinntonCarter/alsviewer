import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import headerStyles from "../styles/Header.module.css";
import apexLegendsLogo from "../public/apex-legends-logo.svg";
import Image from "next/image";

function Header() {
  return (
    <Flex justifyContent={"center"}>
      <Text as="h1" className={headerStyles.title}>
        <Image
          title="Apex Legends logo and IP trademark Electronic Arts"
          src={apexLegendsLogo}
          width={"360px"}
          height={"260px"}
          alt="Apex legends svg logo trademark of Electronic Arts"
        />
        <a
          href="https://apexlegendsapi.com/"
          title="Data provided by https://apexlegendsapi.com/"
        >
          <br />
          Unofficial
          <br />
          Player Stats Viewer
        </a>
      </Text>
    </Flex>
  );
}

export default Header;
