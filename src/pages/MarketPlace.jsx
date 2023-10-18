import React from "react";
import { Box } from "@chakra-ui/react";
import History from "../components/title/History";
import Title from "../components/title/Title";

const MarketPlace = () => {
  return (
    <>
      <Box pl="10px">
        <History pagename="Marketplace" />
        <Title
          title="Marketplace"
          desc="이 페이지는 marketplace 페이지 입니다."
        />
      </Box>
    </>
  );
};

export default MarketPlace;
