import React from "react";
import Layout from "./components/layout/Layout";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";

function App() {
  return (
    <>
      <ChakraProvider theme={theme} />
      <Reset />
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
