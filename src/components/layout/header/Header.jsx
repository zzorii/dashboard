import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Divider, Heading } from "@chakra-ui/react";
// import DividerCus from "../../common/DividerCus";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyle as="h1" id="logo">
        <Link to="/">
          <span>horizon</span> free
        </Link>
      </HeaderStyle>
      {/* <DividerCus /> */}
      <Divider borderColor="red" />
      <Gnb />
    </HeaderWrapper>
  );
};

const HeaderStyle = styled(Heading)`
  a {
    display: block;
    transition: color 0.3s ease-in-out;
    text-transform: uppercase;
    text-align: center;
    font-size: 26px;
    color: var(--primary-dark);
    margin-bottom: 68px;
    span {
      font-weight: 700;
    }
    &:hover {
      color: var(--primary);
    }
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 290px;
  padding: 50px 32px;
  background-color: var(--white);
`;

export default Header;
