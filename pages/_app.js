import "../styles/globals.css";
import {
  ChakraProvider,
  Container,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Layout> */}
      <Container
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        height={"100vh"}
      >
        <Stack background={"white"} p={"10px"} borderRadius={"6px"} w={"auto"}>
          <Text as="h1" fontWeight={"bold"} size={"xxl"}>
            Under maintenance
          </Text>
          <Image
            src={
              "https://media.tenor.com/v7Z6_aeZ1ocAAAAe/patrick-star-idk.png"
            }
            title="under construction"
            alt="maintenance image holder"
          />
        </Stack>
      </Container>
      {/* <Component {...pageProps} /> */}
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default MyApp;
