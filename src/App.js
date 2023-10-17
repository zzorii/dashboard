import React from "react";
import Layout from "./components/layout/Layout";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
// import About from "./pages/about";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";
import MarketPlace from "./pages/MarketPlace";
import Tables from "./pages/Tables";
import Profile from "./pages/Profile";
import Kanban from "./pages/Kanban";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <ChakraProvider theme={theme} />
      <Reset />
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<MarketPlace />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
