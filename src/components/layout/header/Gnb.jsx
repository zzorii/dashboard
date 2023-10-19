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
        <li className={location.pathname === "/marketplace" ? "active" : ""}>
          <Link to="/marketplace">
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
        <li className={location.pathname === "/signin" ? "active" : ""}>
          <Link to="/signin">
            <BiSolidLockOpen />
            Sign in
          </Link>
        </li>
      </ul>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.nav`
  ul {
    li {
      position: relative;
      margin-left: 3px;
      &::after {
        opacity: 0;
        transition: opacity 1s;
      }
      &.active {
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -32px;
          transform: translateY(-50%);
          width: 4px;
          height: 36px;
          border-radius: 25px;
          background: var(--primary);
          opacity: 1;
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
        font-weight: 500;
        &:hover {
          color: var(--primary-dark);
        }
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;
export default Gnb;
