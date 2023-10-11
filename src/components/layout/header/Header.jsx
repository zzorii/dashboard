import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";

// function Header() {}
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">logo</Link>
      </Logo>
      <Gnb />
    </HeaderWrapper>
  );
};

// const 변수명 = styled.태그명``;
const Logo = styled.h1`
  font-size: 30px;
  color: red;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;
  background-color: #eee;
`;

export default Header;
