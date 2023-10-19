import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import History from "../common/History";
import Title from "../common/Title";

const Layout = ({ title, pagename, children }) => {
  // const {pagename, children} = props;
  return (
    <Wrap>
      <Header />
      <main id="main">
        <Box p="0 0 50px 10px">
          <History pagename={pagename} />
          <Title title={title} />
        </Box>
        {children}
      </main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 290px;
  background: var(--secondary-grey-300);
  #main {
    min-height: 100vh;
    padding: 50px 20px;
  }
`;

export default Layout;
