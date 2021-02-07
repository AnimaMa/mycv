import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../Theme/Theme"
import { GlobalStyle } from "../Theme/GlobalStyle"
import React, { ReactNode } from "react"
// import Footer from "./components/Footer/Footer";
// import { QueryClient, QueryClientProvider } from "react-query";
import Container from "@material-ui/core/Container"
import { Header } from "../Header/Header"

interface LayoutProps {
  className?: string
  children: ReactNode
  bgColor?: boolean
}
const Layout = (props: LayoutProps) => {
  return (
    <div className={`${props?.className} ${props.bgColor ? "with-bg-color" : ""}`}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{props.children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  )
}

export default Layout
