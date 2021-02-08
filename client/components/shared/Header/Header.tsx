import Container from "@material-ui/core/Container"
import Link from "next/link"
import Image from "next/image"
import React from "react"

export interface HeaderProps {
  className?: string
}

const HeaderInner = (props: HeaderProps) => {
  return (
    <header className="top-0 p-y-5">
      <div className="container mx-auto">
        <nav className="navigation flex justify-between items-center">
          <Link href="/">
            <Image src="/img/logo.svg" alt="cloudresume logo" width={90} height={75} />
          </Link>
          <div className="space-x-5">
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/create-resume">
              <a>Create Resume</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export const Header = HeaderInner

/* height: 80px;

  .custom-container {
    height: 100%;
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    a {
      margin: 0 8px;
    }
  }
` */
