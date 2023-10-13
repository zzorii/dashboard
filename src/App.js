import React from "react";
import Layout from "./components/layout/Layout";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import GlobalStyles from "./styles/GlobalStyles.styles";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";

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
