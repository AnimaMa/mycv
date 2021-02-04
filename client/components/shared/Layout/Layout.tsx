import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MyTheme } from "../Theme/Theme";
import { GlobalStyle } from "../Theme/GlobalStyle";
import React from "react";
// import Footer from "./components/Footer/Footer";
// import { QueryClient, QueryClientProvider } from "react-query";
import Container from "@material-ui/core/Container";
import { Header } from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={MyTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default Layout;
