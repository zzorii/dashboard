import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
// import { MdBarChart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiSolidLockOpen } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWrapper>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <AiFillHome />
            Dashboard
          </Link>
        </li>
        <li className={location.pathname === "/maket" ? "active" : ""}>
          <Link to="/maket">
            <BsFillCartFill />
            NFT Marketplace
          </Link>
        </li>
        <li className={location.pathname === "/tables" ? "active" : ""}>
          <Link to="/tables">
            <BiSolidBarChartAlt2 />
            {/* <MdBarChart /> */}
            Tables
          </Link>
        </li>
        <li className={location.pathname === "/kanban" ? "active" : ""}>
          <Link to="/kanban">
            <BiSolidDashboard />
            Kanban
          </Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">
            <FaUser />
            Profile
          </Link>
        </li>
        <li className={location.pathname === "/sighin" ? "active" : ""}>
          <Link to="/sighin">
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
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 67px;
    li {
      margin-left: 5px;
      &.active {
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(-50%);
          border-radius: 25px;
          width: 4px;
          height: 36px;
          color: var(--primary);
        }
        a {
          color: var(--primary-dark);
          font-weight: 700;
          svg {
            color: var(--primary);
          }
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 0;
        color: var(--secondary-grey-600);
        &:hover {
          color: var(--primary-dark);
        }
        svg {
          font-size: 20px;
        }
      }
    }
  }
`;

export default Gnb;
