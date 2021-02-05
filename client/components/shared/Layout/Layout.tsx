import {
  createGlobalStyle,
  ThemeProvider,
} from "styled-components"
import { MyTheme } from "../Theme/Theme"
import { GlobalStyle } from "../Theme/GlobalStyle"
import React, { ReactNode } from "react"
// import Footer from "./components/Footer/Footer";
// import { QueryClient, QueryClientProvider } from "react-query";
import Container from "@material-ui/core/Container"
import { Header } from "../Header/Header"

interface LayoutProps {
  className?: string
  children: ReactNode
}
const Layout = (props: LayoutProps) => {
  return (
    <div className={props.className}>
      <ThemeProvider theme={MyTheme}>
        <GlobalStyle />
        <Header />
        <main>{props.children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  )
}

export default Layout
