import React from "react";
// import { Link } from 'react-router-dom';
// import { Link } from '@reach/router';
import { VStack, Heading } from "@chakra-ui/react";

const Title = ({ title }) => {
  return (
    <VStack alignItems={"flex-start"} spacing={4}>
      <Heading as={"h2"} fontSize={"34px"} fontWeight={"700"}>
        {title}
      </Heading>
      {/* <Text variant={"txt164"}>{pagename}</Text> */}
    </VStack>
  );
};

export default Title;
