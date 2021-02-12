import React, { ReactNode } from "react"
import { Header } from "../Header/Header"

interface LayoutProps {
  className?: string
  children: ReactNode
  bgColor?: boolean
}
const Layout = (props: LayoutProps) => {
  return (
    <div className={`${props?.className} ${props.bgColor ? "with-bg-color" : ""}`}>
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
