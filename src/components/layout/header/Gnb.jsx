import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiSolidLockOpen } from "react-icons/bi";

const Gnb = () => {
  return (
    <GnbWrapper>
      <ul>
        <li>
          <Link to="/">
            <AiFillHome />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BsFillCartFill />
            NFT Marketplace
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BiSolidBarChartAlt2 />
            <MdBarChart />
            Tables
          </Link>
        </li>
        <li>
          <Link to="/about">Kanban</Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BiSolidLockOpen />
            Sigh in
          </Link>
        </li>
      </ul>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin-left: 10px;
      a {
        color: #333;
        &:hover {
          color: #000;
        }
      }
    }
  }
`;

export default Gnb;
