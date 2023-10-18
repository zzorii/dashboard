import React from "react";
import Title from "../components/title/Title";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import History from "../components/title/History";

const Tables = () => {
  return (
    <>
      <Box pl="10px">
        <History pagename="tables" />
        <Title title="Tables" desc="이 페이지는 tables 페이지 입니다." />
      </Box>
      <Grid
        h="100vh"
        w="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
      </Grid>
    </>
  );
};

export default Tables;
