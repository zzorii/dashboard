import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading } from "@chakra-ui/react";

// function Header() {}
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyle as="h1" fontSize={"30px"} color={"blue"} className="logo">
        <Link to="/">logo</Link>
      </HeaderStyle>
      {/* <Logo>
        <Link to="/">logo</Link>
      </Logo> */}
      <Gnb />
    </HeaderWrapper>
  );
};

// const 변수명 = styled.태그명``;
const HeaderStyle = styled(Heading)`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  padding: 30px;
  background-color: var(--S_Light);
`;

export default Header;
