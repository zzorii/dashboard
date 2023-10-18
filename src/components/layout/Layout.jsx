import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <Wrap>
      <Header />
      <main id="main">{props.children}</main>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 290px;
  min-height: 100vh;
  background: var(--secondary-grey-300);
  #main {
    flex: 1;
    padding: 50px 20px;
  }
`;

export default Layout;
